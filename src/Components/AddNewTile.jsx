import "../Styles/AddNewTile.css";
import { useState } from 'react';

export default function AddNewTile(Props) {
    const [showPopup, setShowPopup] = useState(false);
    const [isNewApp, setIsNewApp] = useState(null); // Track if "New App" or "New Group" is selected
    const [appName, setAppName] = useState('');
    const [appDirectory, setAppDirectory] = useState('');
    const [appImage, setAppImage] = useState('');
    const [groupName, setGroupName] = useState('');
    const [groupMembers, setGroupMembers] = useState([
        { name: '', directory: '' },
        { name: '', directory: '' },
        { name: '', directory: '' },
        { name: '', directory: '' }
    ]);

    function handleNewTileClick() {
        setShowPopup(true);
    }

    function handleClosePopup() {
        setShowPopup(false);
        resetForm(); // Reset form on close
    }

    function resetForm() {
        setIsNewApp(null); // Reset selection
        setAppName('');
        setAppDirectory('');
        setAppImage('');
        setGroupName('');
        setGroupMembers([
            { name: '', directory: '' },
            { name: '', directory: '' },
            { name: '', directory: '' },
            { name: '', directory: '' }
        ]);
    }

    function handleNewAppClick() {
        setIsNewApp(true); // Set to New App
    }

    function handleNewGroupClick() {
        setIsNewApp(false); // Set to New Group
    }

    function handleSubmit() {
        if (isNewApp) {
            console.log(`Submitting New App: ${appName}`);
        } else {
            console.log(`Submitting New Group: ${groupName}`);
        }
        // Reset form after submission if needed
        resetForm();
        handleClosePopup();
    }

    return (
        <div>
            <div className="tile" onClick={handleNewTileClick}>
                <div className="tile-add">
                    <div className="tile-add-plus">
                        <img src={Props.pluspng} alt="" className="tile-plus" />
                    </div>
                </div>
                <div className="tile-title-new">Add new</div>
            </div>
            {showPopup && (
                <div>
                    <div className="bg-blur" onClick={handleClosePopup} />
                    <div className="add-new-popup">
                        {isNewApp === null ? (
                            // Initial Popup
                            <>
                                <h2 className="add-new-title">Select Option</h2>
                                <div className="button-container">
                                    <button className="add-new-button" onClick={handleNewAppClick}>New App</button>
                                    <button className="add-new-button" onClick={handleNewGroupClick}>New Group</button>
                                </div>
                            </>
                        ) : (
                            // Input Fields for New App or New Group
                            <>
                                <h2 className="add-new-title">{isNewApp ? 'New App' : 'New Group'}</h2>
                                {isNewApp ? (
                                    <div>
                                        <input
                                            type="text"
                                            className="app-input" // Class for App inputs
                                            placeholder="App Name"
                                            value={appName}
                                            onChange={(e) => setAppName(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            className="app-input" // Class for App inputs
                                            placeholder="App Directory"
                                            value={appDirectory}
                                            onChange={(e) => setAppDirectory(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            className="app-input" // Class for App inputs
                                            placeholder="App Image URL"
                                            value={appImage}
                                            onChange={(e) => setAppImage(e.target.value)}
                                        />
                                    </div>
                                ) : (
                                    <div>
                                        <input
                                            type="text"
                                            className="group-input" // Class for Group inputs
                                            placeholder="Group Name"
                                            value={groupName}
                                            onChange={(e) => setGroupName(e.target.value)}
                                        />
                                        {groupMembers.map((member, index) => (
                                            <div key={index}>
                                                <input
                                                    type="text"
                                                    className="member-input" // Class for Member inputs
                                                    placeholder={`Member ${index + 1} Name`}
                                                    value={member.name}
                                                    onChange={(e) => {
                                                        const updatedMembers = [...groupMembers];
                                                        updatedMembers[index].name = e.target.value;
                                                        setGroupMembers(updatedMembers);
                                                    }}
                                                />
                                                <input
                                                    type="text"
                                                    className="member-input" // Class for Member inputs
                                                    placeholder={`Member ${index + 1} Directory`}
                                                    value={member.directory}
                                                    onChange={(e) => {
                                                        const updatedMembers = [...groupMembers];
                                                        updatedMembers[index].directory = e.target.value;
                                                        setGroupMembers(updatedMembers);
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <button className="submit-button" onClick={handleSubmit}>Submit</button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}