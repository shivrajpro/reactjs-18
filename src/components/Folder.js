import { useState } from "react";

function Folder({ handleInsertNode, explorer }) {
    const [expand, setExpand] = useState(false);
    //   console.log(explorer);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null,
    });

    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation();

        setExpand(true);
        setShowInput({
            visible: true,
            isFolder,
        });
    };

    const onAddFolder = (e) => {
        if (e.keyCode == 13 && e.target.value) {
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
            setShowInput({ ...showInput, visible: false });
        }
    };
    if (explorer.isFolder) {
        return (
            <div style={{ marginTop: 5 }}>
                <div className="folder" onClick={() => setExpand(!expand)}>
                    <span>📁 {explorer.name} </span>

                    <div>
                        <button onClick={(e) => handleNewFolder(e, true)}>Folder ➕</button>
                        <button onClick={(e) => handleNewFolder(e, false)}>File ➕</button>
                    </div>
                </div>
                <div
                    style={{ display: expand ? "block" : "none", paddingLeft: "24px" }}
                >
                    {showInput.visible && (
                        <div className="input-container">
                            <span> {showInput.isFolder ? "📁" : "📄"} </span>
                            <input
                                type="text"
                                className="name-input"
                                onKeyDown={onAddFolder}
                                autoFocus
                                onBlur={() => setShowInput({ ...showInput, visible: false })}
                            />
                        </div>
                    )}
                    {explorer.items.map((exp) => {
                        return (
                            <Folder
                                handleInsertNode={handleInsertNode}
                                explorer={exp}
                                key={exp.id}
                            />
                        );
                    })}
                </div>
            </div>
        );
    } else {
        return <span className="file">📄 {explorer.name} </span>;
    }
}

export default Folder;
