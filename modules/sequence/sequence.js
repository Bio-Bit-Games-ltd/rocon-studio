












// SEQUENCE : 

import { getUi } from "../get-ui/get-ui";

const sequenceDataTest = [
    {
        
    }
]

export function sequence(sequenceData){

    const sequenceControlContainer = getUi("sequence-control-container");
    const sequenceTrackerContainer = getUi("sequence-tracker-container");

    const sequenceTime = sequenceData.time;
    const sequenceTrackerGroup = sequenceData.trackerGroup;

    sequenceTrackerGroup.forEach(trackerGroup => { 
        
        const trackerName = trackerGroup.name;
        const trackerStart = trackerGroup.start;
        const trackerEnd = trackerGroup.end;
        const trackerColor = trackerGroup.color;
        const trackerStartValue = trackerGroup.startValue;
        const trackerEndValue = trackerGroup.endValue;

        // TRACK CONTRL : 

        const sequenceTrackRow = document.createElement("div");
        sequenceTrackRow.classList.add("timeline-track-row");

        const sequenceTrackControl = document.createElement("div");
        sequenceTrackControl.classList.add("timeline-tracker-control");

        const sequenceTrackControlName = document.createElement("span");
        sequenceTrackControlName.classList.add("tracker-control-name");
        sequenceTrackControlName.textContent = trackerName;

        const sequenceTrackLockButton = document.createElement("button");
        const sequenceTrackDeleteButton = document.createElement("button");
        const sequenceTrackVisibleButton = document.createElement("button");
        const sequenceTrackAddButton = document.createElement("button");
        
        const sequenceTrackLockButtonIcon = document.createElement("i");
        sequenceTrackLockButtonIcon.classList.add("ri-lock-fill");
        
        const sequenceTrackDeleteButtonIcon = document.createElement("i");
        sequenceTrackDeleteButtonIcon.classList.add("ri-delete-bin-fill");

        const sequenceTrackVisibleButtonIcon = document.createElement("i");
        sequenceTrackVisibleButtonIcon.classList.add("ri-eye-fill");

        const sequenceTrackAddButtonIcon = document.createElement("i");
        sequenceTrackAddButtonIcon.classList.add("ri-add-large-fill");

        sequenceTrackLockButton.appendChild(sequenceTrackLockButtonIcon)
        sequenceTrackLockButton.appendChild(sequenceTrackDeleteButtonIcon)
        sequenceTrackLockButton.appendChild(sequenceTrackVisibleButtonIcon)
        sequenceTrackLockButton.appendChild(sequenceTrackAddButtonIcon)
        sequenceTrackControl.appendChild(sequenceTrackLockButton);
        sequenceTrackControl.appendChild(sequenceTrackDeleteButton);
        sequenceTrackControl.appendChild(sequenceTrackVisibleButton);
        sequenceTrackControl.appendChild(sequenceTrackAddButton);
        sequenceTrackControl.appendChild(sequenceTrackControlName);
        sequenceTrackRow.appendChild(sequenceTrackControl);
        sequenceControlContainer.appendChild(sequenceTrackRow);

        // TRACKER : 

        // const 
        // sequenceTrackerRow = 



    });
}