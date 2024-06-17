/**
 * @type {import("../../lib_sync/dtpweb").DTPWeb | undefined}
 */
var api = undefined;
/**
 * @type {import("../../lib_sync/dtpweb/DTPWeb")}
 */
var DTPWeb = window.dtpweb.DTPWeb;
//
window.onload = function () {
    DTPWeb.getInstance().checkPlugin(function (value) {
            api = value;
            if (api) {
                updatePrinterList();
            } else {
                alert("Print service unavailable");
            }
        });
    // Automatically update when some options change
    document.getElementById("text-test-label-width").onchange = onDrawParamChanged;
    document.getElementById("text-test-label-height").onchange = onDrawParamChanged;
    document.getElementById("select-orientation").onchange = onDrawParamChanged;
    //
    document.getElementById("text-test-pos-x").onchange = onDrawParamChanged;
    document.getElementById("text-test-pos-y").onchange = onDrawParamChanged;
    document.getElementById("text-test-pos-width").onchange = onDrawParamChanged;
    document.getElementById("text-test-pos-height").onchange = onDrawParamChanged;
    //
    document.getElementById("text-test-content").onchange = onDrawParamChanged;
    document.getElementById("text-test-align-hor").onchange = onDrawParamChanged;
    document.getElementById("text-test-align-ver").onchange = onDrawParamChanged;
    document.getElementById("text-test-rotation").onchange = onDrawParamChanged;
    //
    document.getElementById("text-test-font-height").onchange = onDrawParamChanged;
    document.getElementById("text-test-font-style").onchange = onDrawParamChanged;
    document.getElementById("text-test-char-space").onchange = onDrawParamChanged;
    document.getElementById("text-test-line-space").onchange = onDrawParamChanged;
    document.getElementById("text-test-font-name").onchange = onDrawParamChanged;
    document.getElementById("text-test-auto-return").onchange = onDrawParamChanged;
    //
    document.getElementById("text-test-leading-indent").onchange = onDrawParamChanged;
    document.getElementById("text-test-leading-indent-mm").onchange = onDrawParamChanged;
    document.getElementById("text-test-leading-indent-chars").onchange = onDrawParamChanged;
    //
    document.getElementById("text-test-region-corners").onchange = onDrawParamChanged;
    document.getElementById("text-test-region-left-up-corner").onchange = onDrawParamChanged;
    document.getElementById("text-test-region-right-up-corner").onchange = onDrawParamChanged;
    document.getElementById("text-test-region-left-bottom-corner").onchange = onDrawParamChanged;
    document.getElementById("text-test-region-right-bottom-corner").onchange = onDrawParamChanged;
    document.getElementById("text-test-region-left-borders").onchange = onDrawParamChanged;
    document.getElementById("text-test-region-right-borders").onchange = onDrawParamChanged;
};

//#region Get a list of printers

/**
 * Update the printer list.
 */
function updatePrinterList() {
    var printerElements = document.getElementById("select-printlist");
    var printers = api.getPrinters({ onlyLocal: false });
    if (printers instanceof Array && printers.length > 0) {
        for (var i = 0; i < printers.length; i++) {
            var item = printers[i];
            // If other printers in the LAN are detected, the IP and hostname can be obtained. If it is a local printer, there is only the name attribute in the parameter, which indicates the printer name.
            var name = item.hostname && item.type !== 1 ? item.name + "@" + item.ip : item.name;
            var value = item.ip ? item.name + "@" + item.ip : item.name;
            printerElements.options.add(new Option(name, value));
        }
    } else {
        printerElements.options.add(new Option("Printer not detected", ""));
    }
    // Link the default printer and update the printing parameters of the selected printer;
    onPrintSelected();
    //
    printText();
}

//#endregion

/**
 * Get the currently selected printer;
 */
function getSelectedPrinter() {
    var printerElement = document.getElementById("select-printlist");
    if (!printerElement.value) return {};

    var arr = printerElement.value.split("@");
    return {
        printerName: arr[0],
        ip: arr[1],
    };
}

/**
 * Open the current printer;
 */
function openPrinter() {
    var printer = getSelectedPrinter();
    if (printer.printerName) return api.openPrinter(printer);
    else return false;
}

/**
 * Turn off the connected printer;
 */
function closePrinter() {
    api.closePrinter();
}

/**
 * When the printer is updated, the relevant printing parameters of the current printer are updated synchronously;
 */
function onPrintSelected() {
    if (openPrinter()) {
        var gapTypeSelect = document.getElementById("select-gaptype");
        gapTypeSelect.value = api.getGapType();
    }
    // After use, turn off the printer to avoid occupying the printer and affecting other users' use;
    api.closePrinter();
}

/**
 * Modify the paper type of the current printer;
 * The call is valid after the printer is opened successfully;
 */
function onGapTypeSelected() {
    var gapTypeSelect = document.getElementById("select-gaptype");
    api.setGapType(gapTypeSelect.value);
}

/**
 * Get the currently selected task type value;
 * 0 : Indicates that the current print task is a print task;
 * 1 : Indicates that the current print task is a white background preview task;
 * 2 : Indicates that the current print task is a preview task with a transparent background;
 */
function getJobTypeValue() {
    return document.getElementById("select-print-preview").value;
}

/**
 * Get the name of the current print task;
 */
function getJobName(jobTypeValue, defJobName) {
    var value = typeof jobTypeValue === "number" ? jobTypeValue : getJobTypeValue();
    if (value === "0")
        // White base color
        return "#!#Preview#!#";
    else if (value === "1")
        // Transparent background
        return "#!#Transparent#!#";
    else return defJobName || "DTPWeb"; // Print the task name, just write it;
}
function onDrawParamChanged() {
    if (getJobTypeValue() !== "2") {
        printText();
    }
}
/**
 * Print text related objects.
 */
function printText() {
    // Turn on the printer
    openPrinter();
    //
    var text = document.getElementById("text-test-content").value;
    var labelWidth = document.getElementById("text-test-label-width").value * 1;
    var labelHeight = document.getElementById("text-test-label-height").value * 1;
    var orientation = document.getElementById("select-orientation").value * 1;
    var posX = document.getElementById("text-test-pos-x").value * 1;
    var posY = document.getElementById("text-test-pos-y").value * 1;
    var posWidth = document.getElementById("text-test-pos-width").value * 1;
    var posHeight = document.getElementById("text-test-pos-height").value * 1;
    var fontHeight = document.getElementById("text-test-font-height").value * 1;
    var fontStyle = document.getElementById("text-test-font-style").value * 1;
    var charSpace = document.getElementById("text-test-char-space").value * 1;
    var lineSpace = document.getElementById("text-test-line-space").value;
    var fontName = document.getElementById("text-test-font-name").value;
    var autoReturn = document.getElementById("text-test-auto-return").value * 1;
    //
    var alignHor = document.getElementById("text-test-align-hor").value * 1;
    var alignVer = document.getElementById("text-test-align-ver").value * 1;
    var rotation = document.getElementById("text-test-rotation").value * 1;
    var leadingIndent = document.getElementById("text-test-leading-indent").value * 1;
    var indentMM = document.getElementById("text-test-leading-indent-mm").value * 1;
    var indentChars = document.getElementById("text-test-leading-indent-chars").value * 1;
    //
    var regionCorners = document.getElementById("text-test-region-corners").value;
    var regionLeftUpCorner = document.getElementById("text-test-region-left-up-corner").value;
    var regionRightUpCorner = document.getElementById("text-test-region-right-up-corner").value;
    var regionLeftBottomCorner = document.getElementById("text-test-region-left-bottom-corner").value;
    var regionRightBottomCorner = document.getElementById("text-test-region-right-bottom-corner").value;
    var regionLeftBorders = document.getElementById("text-test-region-left-borders").value;
    var regionRightBorders = document.getElementById("text-test-region-right-borders").value;
    //
    // Determine whether the line spacing is a pure number
    if (/^[0-9.]+$/.test(lineSpace)) lineSpace = lineSpace * 1;
    //
    api.startJob({
        width: labelWidth,
        height: labelHeight,
        orientation: orientation,
        jobName: getJobName(),
    });

    if (rotation) {
        // If there is rotation, draw the rotation auxiliary line
        api.drawRectangle({ width: posWidth, height: posHeight, lineWidth: 0.3 });
        api.drawRectangle({ width: posWidth, height: posHeight, lineWidth: 0.3, orientation: rotation });
    }
    // Drawing a string
    api.drawText({
        text: text,
        x: posX,
        y: posY,
        width: posWidth,
        height: posHeight,
        fontName: fontName,
        fontHeight: fontHeight,
        fontStyle: fontStyle,
        autoReturn: autoReturn,
        charSpace: charSpace,
        lineSpace: lineSpace,
        horizontalAlignment: alignHor,
        verticalAlignment: alignVer,
        orientation: rotation,
        leadingIndent: leadingIndent,
        leadingIndentMM: indentMM,
        leadingIndentChars: indentChars,
        regionCorners: regionCorners,
        regionLeftUpCorner: regionLeftUpCorner,
        regionRightUpCorner: regionRightUpCorner,
        regionLeftBottomCorner: regionLeftBottomCorner,
        regionRightBottomCorner: regionRightBottomCorner,
        regionLeftBorders: regionLeftBorders,
        regionRightBorders: regionRightBorders,
    });
    //
    api.commitJob();

    // If the current task type is a preview type, the preview effect is displayed
    showJobPages();
}

/**
 * Clear the preview area;
 */
function clearPreview() {
    document.getElementById("preview-list").innerHTML = "";
}

/**
 * Get the image information of the current task;
 */
function showJobPages() {
    // Clear the preview area first;
    clearPreview();

    // Now get the number of pages of the current print task, and then traverse the page images;
    var info = api.getPageInfo();
    // Traverse all page data and add them to the preview area
    if (info) {
        for (var i = 0; i < info.pages; i++) {
            var page = api.getPageImage({ page: i });
            addPreview(page);
        }
    }
}

/**
 * Add preview pictures to the item preview area;
 */
function addPreview(data) {
    if (!data) return;

    var previewGroup = document.getElementById("preview-list");
    var img = document.createElement("img");
    img.src = data.data;
    previewGroup.appendChild(img);
    // Line Break
    previewGroup.appendChild(document.createElement("br"));
}

/**
 * Get the src of all img in #preview-list;
 */
function getPreviewList() {
    var previewGroup = document.getElementById("preview-list");
    var pageList = [];
    for (var i = 0; i < previewGroup.children.length; i++) {
        var imgElement = previewGroup.children[i];
        pageList.push(imgElement);
    }

    return pageList;
}

//#endregion
