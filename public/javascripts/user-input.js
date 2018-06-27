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

    // TODO - build BST from list - CREATE
    // TODO - Read - [x]-
    // TODO - insert new node into to BST - CREATE [x]-
    // TODO - Search []-

    // TODO - Update []-
    // TODO - Deletion []-

    // TODO - Rebalancing []-

    // this prints node by node - the BST in alphabetical order
    function logBSTContactsInOrder(binarySearchTree, sortedNames) {
        if (binarySearchTree.nodeLeft !== null) {
            logBSTContactsInOrder(binarySearchTree.nodeLeft, sortedNames)
        }

        console.log('This current Node is >> ' + binarySearchTree.name);
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

    // add click events for calling API here
    $('#printBST').on('click', function(e) {
        e.preventDefault();
        console.log('User Click Registered');
        // var contacts = logBSTContacts(topOfBST);

        // traverse the tree and print in order
        var results = logBSTContactsInOrder(joe, []);
        console.log('>>> results:', results);

        var bstShape = logBST(joe); // logs the output to the console
        console.log('>>> before bstShape:', bstShape);

        var newBST = insertNewContact(joe, 'Jackie');
        var bstShape = logBST(newBST); // logs the output to the console
        console.log('>>> after bstShape 01 :', bstShape);

        var newBST02 = insertNewContact(newBST, 'Smith');
        var bstShape02 = logBST(newBST02); // logs the output to the console
        console.log('>>> after bstShape 02 :', bstShape02);

        

        console.log('>>> final BST', joe);
    });

    console.log('Page Loaded');
});
