












// SEQUENCE : 

import { getUi } from "../get-ui/get-ui.js";
import { console } from "../console/console.js";

const TrackerDefaultColor = {
    red : "#A71919",
    purple : "#4a0472",
    yeallow : "#bf8e24",
    green : "#00ba32"
}

const sequenceDataTest = [
    {
        type : "Translation",       
        time : "",
        lock : false,
        visible : true,
        color : "#A71919",
        id : "4544",
        trackerGroup : [
            {
                name : "Tracker Title",
                start : 0,
                end : 400,
                startValue : "43",
                endValue : "50",
                id : "44343"
            },
            {
                name : "Tracker Title",
                start : 410,
                end : 200,
                startValue : "43434",
                endValue : "4343",
                id : "44343" 
            }
        ]
    },
    {
        type : "Color", 
        time : "",
        lock : false,
        visible : true,
        color : "#bf8e24",
        id : "4544",
        trackerGroup : [
            {
                name : "Tracker Title",
                start : 0,
                end : 200,
                startValue : "43434",
                endValue : "4343",
                id : "44343"
            }
        ]
    },
    ,
    {
        type : "Color", 
        time : "",
        lock : false,
        visible : true,
        color : "#bf8e24",
        id : "4544",
        trackerGroup : [
            {
                name : "Tracker Title",
                start : 0,
                end : 200,
                startValue : "43434",
                endValue : "4343",
                id : "44343"
            }
        ]
    },
    ,
    {
        type : "Color", 
        time : "",
        lock : false,
        visible : true,
        color : "#bf8e24",
        id : "4544",
        trackerGroup : [
            {
                name : "Tracker Title",
                start : 0,
                end : 200,
                startValue : "43434",
                endValue : "4343",
                id : "44343"
            }
        ]
    },
    ,
    {
        type : "Color", 
        time : "",
        lock : false,
        visible : true,
        color : "#bf8e24",
        id : "4544",
        trackerGroup : [
            {
                name : "Tracker Title",
                start : 0,
                end : 200,
                startValue : "43434",
                endValue : "4343",
                id : "44343"
            }
        ]
    },
    ,
    {
        type : "Color", 
        time : "",
        lock : false,
        visible : true,
        color : "#00ba32",
        id : "4544",
        trackerGroup : [
            {
                name : "Tracker Title",
                start : 0,
                end : 400,
                startValue : "43434",
                endValue : "4343",
                id : "44343"
            }
        ]
    },
    ,
    {
        type : "Color", 
        time : "",
        lock : false,
        visible : true,
        color : "#bf8e24",
        id : "4544",
        trackerGroup : [
            {
                name : "Tracker 01",
                start : 0,
                end : 200,
                startValue : "43434",
                endValue : "4343",
                id : "44343"
            }
        ]
    },
    {
        type : "Color", 
        time : "",
        lock : false,
        visible : true,
        color : "#bf8e24",
        id : "4544",
        trackerGroup : [
            {
                name : "Tracker 01",
                start : 0,
                end : 200,
                startValue : "43434",
                endValue : "4343",
                id : "44343"
            }
        ]
    } 
];


export function sequence(sequenceData = sequenceDataTest) {

    const sequenceControlContainer = getUi("sequence-control-container");
    const sequenceTrackerContainer = getUi("sequence-tracker-container");
    
    const sequenceStaticTrackerRow = getUi("sequence-static-tracker-row");
    const sequenceStaticTrackRow = getUi("sequence-static-track-row");

    sequenceData.forEach(trackData => { // Iterar sobre sequenceData, não sequenceData.trackerGroup
        
        const sequenceTrackerGroup = trackData.trackerGroup;

        const trackColor = trackData.color;
        const trackType = trackData.type;
        const trackLock = trackData.lock;
        const trackVisible = trackData.visible;
        const trackId = trackData.id;
        const trackTime = trackData.time;

        const trackVisibleState = null;

        // TRACK CONTROL : 

        const sequenceTrackerRow = document.createElement("div");
        sequenceTrackerRow.classList.add("timeline-track-row", "timeline-tracker-row");

        const sequenceTrackRow = document.createElement("div");
        sequenceTrackRow.classList.add("timeline-track-row");

        const sequenceTrackControl = document.createElement("div");
        sequenceTrackControl.classList.add("timeline-tracker-control");

        const sequenceTrackControlName = document.createElement("span");
        sequenceTrackControlName.classList.add("tracker-control-name");
        sequenceTrackControlName.textContent = trackType;

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

        sequenceTrackLockButton.appendChild(sequenceTrackLockButtonIcon);
        sequenceTrackDeleteButton.appendChild(sequenceTrackDeleteButtonIcon);
        sequenceTrackVisibleButton.appendChild(sequenceTrackVisibleButtonIcon);
        sequenceTrackAddButton.appendChild(sequenceTrackAddButtonIcon);
        sequenceTrackControl.appendChild(sequenceTrackLockButton);
        sequenceTrackControl.appendChild(sequenceTrackDeleteButton);
        sequenceTrackControl.appendChild(sequenceTrackVisibleButton);
        sequenceTrackControl.appendChild(sequenceTrackAddButton);
        sequenceTrackControl.appendChild(sequenceTrackControlName);
        sequenceTrackRow.appendChild(sequenceTrackControl);
        sequenceControlContainer.insertBefore(sequenceTrackRow,sequenceStaticTrackRow);

        sequenceTrackLockButton.addEventListener("click",function(){

            trackVisibleState != trackVisibleState;

            const getAllTrackers = document.querySelectorAll(".tracker");

            if (trackVisibleState){
                getAllTrackers.forEach(trackers =>{
                    trackers.style.opacity = "50%";
                })
            }
        });

        sequenceTrackerGroup.forEach(trackerData => { 
            
            const trackerName = trackerData.name;
            const trackerStart = trackerData.start;
            const trackerEnd = trackerData.end;
            const trackerStartValue = trackerData.startValue;
            const trackerEndValue = trackerData.endValue;

            // TRACKER : 

            const tracker = document.createElement("div");
            tracker.classList.add("tracker");
            tracker.style.left = `${trackerStart}px`;
            tracker.style.width = `${trackerEnd}px`;
            tracker.style.background = `${trackColor}`;

            const trackerHandleLeft = document.createElement("div");
            trackerHandleLeft.classList.add("left-tracker-handle", "tracker-handle");

            const trackerHandleRight = document.createElement("div");
            trackerHandleRight.classList.add("right-tracker-handle", "tracker-handle");

            const trackerHandleLeftIndicator = document.createElement("div");
            trackerHandleLeftIndicator.classList.add("tracker-handle-indicator");
            trackerHandleLeftIndicator.style.background = `${trackColor}`;

            const trackerHandleRightIndicator = document.createElement("div");
            trackerHandleRightIndicator.classList.add("tracker-handle-indicator");
            trackerHandleRightIndicator.style.background = `${trackColor}`;

            const trackerBody = document.createElement("div"); // Alterado para 'div' caso 'tracker-body' não seja um elemento customizado
            trackerBody.classList.add("tracker-body");

            const trackerInputContainer = document.createElement("div"); // Alterado para 'div' caso 'tracker-valuer-container' não seja um elemento customizado
            trackerInputContainer.classList.add("tracker-valuer-container");
            trackerInputContainer.style.borderColor = `${trackColor}`;

            const trackerStartInput = document.createElement("input");
            trackerStartInput.classList.add("tracker-value", "tracker-start-value");
            trackerStartInput.value = `${trackerStartValue}`;

            const trackerNameInput = document.createElement("input");
            trackerNameInput.classList.add("tracker-name");
            trackerNameInput.value = `${trackerName}`;

            const trackerEndInput = document.createElement("input");
            trackerEndInput.classList.add("tracker-value", "tracker-end-value");
            trackerEndInput.value = `${trackerEndValue}`;
 
            trackerInputContainer.appendChild(trackerStartInput);
            trackerInputContainer.appendChild(trackerNameInput);
            trackerInputContainer.appendChild(trackerEndInput);
            trackerBody.appendChild(trackerInputContainer);
            trackerHandleLeft.appendChild(trackerHandleLeftIndicator);
            trackerHandleRight.appendChild(trackerHandleRightIndicator);
            tracker.appendChild(trackerHandleLeft);
            tracker.appendChild(trackerBody);
            tracker.appendChild(trackerHandleRight);
            sequenceTrackerRow.appendChild(tracker);
            sequenceTrackerContainer.insertBefore(sequenceTrackerRow,sequenceStaticTrackerRow);
        });
    });

    function doubleScroll(containerA, containerB) {
        containerB.addEventListener('scroll', () => {
            containerA.scrollTop = containerB.scrollTop;
        });
    
        containerA.addEventListener('scroll', () => {
            containerB.scrollTop = containerA.scrollTop;
        });
    }

    doubleScroll(sequenceControlContainer,sequenceTrackerContainer)
    
}
