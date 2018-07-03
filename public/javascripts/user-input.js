$(document).ready(function() {
    var jack = {
        name: "Jack",
        nodeLeft: null,
        nodeRight: null
    };
    var tom = {
        name: "Tom",
        nodeLeft: null,
        nodeRight: null
    };
    var kay = {
        name: "Kay",
        nodeLeft: null,
        nodeRight: null
    };
    var kevin = {
        name: "Kevin",
        nodeLeft: kay,
        nodeRight: tom
    };
    var jill = {
        name: "Jill",
        nodeLeft: jack,
        nodeRight: null
    };
    var joe = {
        name: "Joe",
        nodeLeft: jill,
        nodeRight: kevin
    };
    var bst = joe;

    // TODO - Update []-
    // TODO - Deletion []-
    // TODO - Rebalancing []-
    // TODO - build BST from list - CREATE ['alpha', 'omega', 'beta']

    function logBSTContactsInOrder(binarySearchTree, sortedNames) {
        if (binarySearchTree.nodeLeft !== null) {
            logBSTContactsInOrder(binarySearchTree.nodeLeft, sortedNames)
        }

        sortedNames.push(binarySearchTree.name);

        if (binarySearchTree.nodeRight !== null) {
            logBSTContactsInOrder(binarySearchTree.nodeRight, sortedNames)
        }

        return sortedNames;
    }

    // this prints node by node - the shape of the BST
    function logBST(binarySearchTree) {
        var names = [];
        console.log('This current Node is >> ' + binarySearchTree.name);

        if (binarySearchTree.nodeLeft !== null) {
            names.push(logBST(binarySearchTree.nodeLeft));
        }

        names.push(binarySearchTree.name);

        if (binarySearchTree.nodeRight !== null) {
            names.push(logBST(binarySearchTree.nodeRight));
        }

        return names;
    }

    function _getNewNode(newName) {
        return {
            name: newName,
            nodeLeft: null,
            nodeRight: null
        };
    }

    function _saveNewContactInNode(nodeOfBST, newName) {
        return (nodeOfBST === null) ?
            _getNewNode(newName) :
            insertNewContact(nodeOfBST, newName);
    }

    function insertNewContact(binarySearchTree, newName) {
        var newString = newName.toLowerCase();
        var oldString = binarySearchTree.name.toLowerCase();

        if (newString < oldString) {
            binarySearchTree.nodeLeft =
                _saveNewContactInNode(binarySearchTree.nodeLeft, newName);
        }

        if (oldString < newString) {
            binarySearchTree.nodeRight =
                _saveNewContactInNode(binarySearchTree.nodeRight, newName);
        }

        return binarySearchTree;
    }

    function searchContactsForString(binarySearchTree, searchResults, searchTerm) {
        if (binarySearchTree === null) {
            return searchResults;
        }

        var currentValue = binarySearchTree.name.toLowerCase();
        var searchTermLowerCase = searchTerm.toLowerCase();

        if (currentValue.indexOf(searchTermLowerCase) > -1) {
            searchResults.push(binarySearchTree.name);
            searchContactsForString(binarySearchTree.nodeLeft, searchResults, searchTerm);
            searchContactsForString(binarySearchTree.nodeRight, searchResults, searchTerm);

            return searchResults;
        }

        if (searchTermLowerCase < currentValue) {
            searchContactsForString(binarySearchTree.nodeLeft, searchResults, searchTerm);
        }

        if (currentValue < searchTermLowerCase) {
            searchContactsForString(binarySearchTree.nodeRight, searchResults, searchTerm);
        }

        return searchResults;
    }

    function _appendValuesToList(domList, values) {
        domList.empty();
        values.forEach(function(value) {
            domList.append($('<li>').text(value));
        });
    }

    $('#search-button').on('click',  function(e) {
        e.preventDefault();
        var searchInput = $('#search-input');

        _appendValuesToList(
            $('#search-results'),
            searchContactsForString(bst, [], searchInput.val())
        );

        searchInput.val('');
    });

    $('#insert-button').on('click',  function(e) {
        e.preventDefault();
        var insertInput = $('#insert-input');
        var newBST = insertNewContact(bst, insertInput.val());
        insertInput.val('');
        buildBST($('#binary-search-tree'), newBST);
    });

    $('#print-list').on('click', function(e) {
        e.preventDefault();
        _appendValuesToList(
            $('#contacts-in-order'),
            logBSTContactsInOrder(bst, [])
        );
    });

    $('#clear-list').on('click', function(e) {
        e.preventDefault();
        $('#contacts-in-order').empty();
    });

    console.log('Page Loaded');

    function _buildBasicBST(binarySearchTree) {
        if (binarySearchTree === null) {
            return;
        }

        // output current node
        var ulDOMElement = $('<ul>');
        ulDOMElement.append($('<li>').text(binarySearchTree.name));

        if (binarySearchTree.nodeLeft !== null) {
            // get the nested left node
            var leftBranch = _buildBasicBST(binarySearchTree.nodeLeft);
            ulDOMElement.append($('<li>').append(leftBranch));
        }

        if (binarySearchTree.nodeRight !== null) {
            // get the nested right node
            var rightBranch = _buildBasicBST(binarySearchTree.nodeRight);
            ulDOMElement.append($('<li>').append(rightBranch));
        }

        return ulDOMElement;
    }

    function buildBST(domElement, binarySearchTree) {
        domElement.empty();
        domElement.append(_buildBasicBST(binarySearchTree));
    }

    buildBST($('#binary-search-tree'), bst);
});
