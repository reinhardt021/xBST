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
    // TODO - build BST from list - CREATE

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
        // console.log('>>> currentValue', currentValue);

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
        var searchTerm = $('#search-input').val();
        var results = searchContactsForString(bst, [], searchTerm);
        console.log('>>> searchTerm', searchTerm);
        console.log('>>> Search Results:', results);
        console.log('>>> BST', bst);

        _appendValuesToList(
            $('#search-results'),
            results
        );
        // TODO: reset to blank input
    });

    $('#insert-button').on('click',  function(e) {
        e.preventDefault();
        var newBST = insertNewContact(
            bst,
            $('#insert-input').val()
        );
        bst = newBST;
        var bstShape = logBST(newBST); // logs the output to the console
        console.log('>>> after bstShape 01 :', bstShape);

        // TODO: reset to blank input
        // TODO: log new binary search tree to the page
    });

    // add click events for calling API here
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
});
