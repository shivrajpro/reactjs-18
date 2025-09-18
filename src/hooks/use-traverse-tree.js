function useTraverseTree() {
    function insertNode(tree, folderId, itemName, isFolder) {
        if (tree.id === folderId) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: itemName,
                isFolder,
                items: [],
            });

            return tree;
        }

        let latestNode = [];
        latestNode = tree.items.map((ob) => {
            return insertNode(ob, folderId, itemName, isFolder);
        });

        return { ...tree, items: latestNode };
    }
    return { insertNode };
}

export default useTraverseTree;
