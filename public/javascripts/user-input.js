$(document).ready(function() {
    // TODO: BST
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

    // TODO - can refactor this
    // can use this as a basic traversal method
    // then pass a callback to do functions to the inner part
    // don't optimize too early - build other functions then refactor
    // TODO - build BST from list - CREATE
    // TODO - Read - [x]-
    // TODO - insert new node into to BST - CREATE [x]-
    // TODO - Search []-
    
    // TODO - Update []-
    // TODO - Deletion []-

    // TODO - Rebalancing []-
    function logBSTContactsInOrder(binarySearchTree, sortedNames) {
        // var names = [];

        // this prints node by node - the shape of the BST
        // console.log('This current Node is >> ' + binarySearchTree.name);
        // names.push(binarySearchTree.name); // output all the names in tree order

        // if left node exists then recursively call this
        // else output this name
        if (binarySearchTree.nodeLeft !== null) {
            logBSTContactsInOrder(binarySearchTree.nodeLeft, sortedNames)
            // names.push(logBSTContacts(binarySearchTree.nodeLeft, sortedNames));
        } else {
            // console.log('no left node found');
        }

        // this prints node by node - the BST in alphabetical order
        console.log(binarySearchTree.name);
        // console.log('This current Node is >> ' + binarySearchTree.name);
        sortedNames.push(binarySearchTree.name);

        // if right node exists then recursively call this
        // else return to go back up a level
        if (binarySearchTree.nodeRight !== null) {
            logBSTContactsInOrder(binarySearchTree.nodeRight, sortedNames)
            // names.push(logBSTContacts(binarySearchTree.nodeRight, sortedNames));
        } else {
            // console.log('no right node found');
        }

        return sortedNames;
    }

    function logBST(binarySearchTree) {
        var names = [];
        // this prints node by node - the shape of the BST
        console.log('This current Node is >> ' + binarySearchTree.name);

        // if left node exists then recursively call this
        // else output this name
        if (binarySearchTree.nodeLeft !== null) {
            names.push(logBST(binarySearchTree.nodeLeft));
        }

        names.push(binarySearchTree.name);

        // if right node exists then recursively call this
        // else return to go back up a level
        if (binarySearchTree.nodeRight !== null) {
            names.push(logBST(binarySearchTree.nodeRight));
        }

        return names;
    }

    function insertNewContact(binarySearchTree, newName) {
        var newString = newName.toLowerCase();
        var oldString = binarySearchTree.name.toLowerCase();

        // if new string comes before the old string
        // then check if left node is free
        if (newString < oldString) {
            // if left node is free then put it in there
            // else go a lever deeper
            if (binarySearchTree.nodeLeft == null) {
                binarySearchTree.nodeLeft = {
                    name: newName,
                    nodeLeft: null,
                    nodeRight: null
                };
            } else {
                binarySearchTree.nodeLeft = insertNewContact(
                    binarySearchTree.nodeLeft,
                    newName
                );
            }
        }

        if (oldString < newString) {
            // if right node is free then put it in there
            // else go a lever deeper
            if (binarySearchTree.nodeRight == null) {
                binarySearchTree.nodeRight = {
                    name: newName,
                    nodeLeft: null,
                    nodeRight: null
                };
            } else {
                binarySearchTree.nodeRight = insertNewContact(
                    binarySearchTree.nodeRight,
                    newName
                );
            }
        }

        return binarySearchTree;
    }

    // add click events for calling API here
    $('#printBST').on('click', function(e) {
        e.preventDefault();
        console.log('User Click Registered');
        // var contacts = logBSTContacts(topOfBST);

        // traverse the tree and print in order
        // var results = logBSTContactsInOrder(joe, []); // console.log output
        // console.log('>>> results:', results);

        var bstShape = logBST(joe); // logs the output to the server
        console.log('>>> before bstShape:', bstShape);

        var newBST = insertNewContact(joe, 'Jackie');
        var bstShape = logBST(newBST); // logs the output to the server
        console.log('>>> after bstShape 01 :', bstShape);

        var newBST02 = insertNewContact(newBST, 'Smith');
        var bstShape02 = logBST(newBST02); // logs the output to the server
        console.log('>>> after bstShape 02 :', bstShape02);
    });

    console.log('Page Loaded');
});
