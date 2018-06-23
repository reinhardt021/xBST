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

    function logBSTContacts(binarySearchTree) {
        // if left node exists then recursively call this
        // else output this name
        console.log('This current Node is >> ' + binarySearchTree.name);

        if (binarySearchTree.nodeLeft !== null) {
            logBSTContacts(binarySearchTree.nodeLeft);
        } else {
            // console.log('This current Node is >> ' + binarySearchTree.name);
            console.log('no left node found');
        }

        // if right node exists then recursively call this
        // else return to go back up a level
        if (binarySearchTree.nodeRight !== null) {
            logBSTContacts(binarySearchTree.nodeRight);
        } else {
            // return true;
            console.log('no right node found');
        }
    }

    // add click events for calling API here
    $('#printBST').on('click', function(e) {
        e.preventDefault();
        console.log('User Click Registered');
        // var contacts = logBSTContacts(topOfBST);
        logBSTContacts(joe); // logs the output to the server
    });

    console.log('Page Loaded');
});
