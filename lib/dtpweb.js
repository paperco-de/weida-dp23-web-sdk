(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.dtpweb = {}));
})(this, (function (exports) { 'use strict';

    /**
     * @file utils.ts
     * @author DothanTech (hudianxing@dothantech.com)
     * @brief PC JavaScript version related interface types and method definitions.
     * @version 2.1
     * @date 2022-05-16
     *
     * @copyright Copyright (c) 2022
     *
     */
    /**
     * PC LPAPI Related constants used in the interface.
     */
    const CONSTANTS = {
        /**
         * The post request string.
         */
        METHOD_POST: 'POST',
        /**
         * Get request string.
         */
        METHOD_GET: 'GET',
        /**
         * Default request IP address.
         */
        IP: '127.0.0.1',
        /**
         * The default port number.
         */
        PORT1: 15216,
        /**
         * Alternative port number.
         */
        PORT2: 35216,
        /**
         * The default request timeout.
         */
        TIME_OUT: 2000,
        /**
         * Timeout for non-local requests.
         */
        OUTER_TIME_OUT: 5000,
        /**
         * Default label width.
         */
        LABEL_WIDTH: 40,
        /**
         * Default label height.
         */
        LABEL_HEIGHT: 30,
        /**
         * Default font.
         */
        FONT_NAME: 'Bold',
        /**
         * Default font height.
         */
        FONT_HEIGHT: 3.5,
        /**
         * Default line width for related vector graphics.
         */
        LINE_WIDTH: 0.35,
        /**
         * Default dash-dot line segment array.
         */
        DASH_LEN: [0.5, 0.5],
        /**
         * The default rounded rectangle corner radius.
         */
        CORNER_RADIUS: 1.5,
        /**
         * Default circle radius.
         */
        RADIUS: 5,
        /**
         * Default rectangle width.
         */
        RECT_WIDTH: 20,
        /**
         * Default image black and white conversion threshold.
         */
        THRESHOLD: 192,
        /**
         * Default printing method. When calling the print interface to print JSON data, it prints directly by default.
         */
        PRINT_ACTION: 0x1000,
    };
    const CONTROLS = {
        /** lpapi */
        LPAPI: 'lpapi',
        /** local */
        LOCAL: 'local',
    };
    const ACTIONS = {
        DiscoveryPrinters: 'DiscoveryPrinters',
        GetPrinters: 'GetPrinters',
        OpenPrinter: 'OpenPrinter',
        ClosePrinter: 'ClosePrinter',
        IsPrinterOpened: 'IsPrinterOpened',
        IsPrinterOnline: 'IsPrinterOnline',
        GetPrinterName: 'GetPrinterName',
        ShowProperty: 'ShowProperty',
        PrintImage: 'PrintImage',
        PrintImageD: 'PrintImageD',
        PrintRawData: 'PrintRawData',
        PrintPackage: 'PrintPackage',
        Print: 'print',
        //
        GetParam: 'GetParam',
        SetParam: 'SetParam',
        GetItemOrientation: 'GetItemOrientation',
        SetItemOrientation: 'SetItemOrientation',
        GetItemHorizontalAlignment: 'GetItemHorizontalAlignment',
        SetItemHorizontalAlignment: 'SetItemHorizontalAlignment',
        GetItemVerticalAlignment: 'GetItemVerticalAlignment',
        SetItemVerticalAlignment: 'SetItemVerticalAlignment',
        StartJob: 'StartJob',
        StartPreview: 'StartPreview',
        AbortJob: 'AbortJob',
        CommitJob: 'CommitJob',
        GetJobID: 'GetJobID',
        GetJobInfo: 'GetJobInfo',
        GetPageInfo: 'GetPageInfo',
        GetPageImage: 'GetPageImage',
        StartPage: 'StartPage',
        EndPage: 'EndPage',
        //
        ReturnDrawResult: 'ReturnDrawResult',
        DrawText: 'DrawText',
        Draw1DBarcode: 'Draw1DBarcode',
        Draw2DQRCode: 'Draw2DQRCode',
        Draw2DPdf417: 'Draw2DPdf417',
        Draw2DDataMatrix: 'Draw2DDataMatrix',
        DrawRectangle: 'DrawRectangle',
        FillRectangle: 'FillRectangle',
        DrawRoundRectangle: 'DrawRoundRectangle',
        FillRoundRectangle: 'FillRoundRectangle',
        DrawEllipse: 'DrawEllipse',
        FillEllipse: 'FillEllipse',
        DrawLine: 'DrawLine',
        DrawDashLine: 'DrawDashLine',
        DrawImage: 'DrawImage',
        DrawImageD: 'DrawImageD',
        // local Action
        ServerInfo: 'ServerInfo',
    };
    const CONTENT_TYPE = {
        UrlEncoded: 'application/x-www-form-urlencoded;charset=UTF-8',
        Base64: 'application/octet-stream;encoding=base64',
        Json: 'application/json;charset:utf-8',
    };
    /**
     * Print parameter ID, used by GetParam() and SetParam().
     */
    exports.LPA_ParamID = void 0;
    (function (LPA_ParamID) {
        /** Paper type. For the corresponding value, refer to the attribute {@link LPA_GapType} */
        LPA_ParamID[LPA_ParamID["GapType"] = 1] = "GapType";
        /** Print density. For the corresponding value, refer to {@link LPA_PrintDarkness} */
        LPA_ParamID[LPA_ParamID["PrintDarkness"] = 2] = "PrintDarkness";
        /** Printing speed. The corresponding value can be found in {@link LPA_PrintSpeed} */
        LPA_ParamID[LPA_ParamID["PrintSpeed"] = 3] = "PrintSpeed";
        /** Printer resolution */
        LPA_ParamID[LPA_ParamID["PrinterDPI"] = 4] = "PrinterDPI";
    })(exports.LPA_ParamID || (exports.LPA_ParamID = {}));
    /**
     * Paper spacing type.
     */
    exports.LPA_GapType = void 0;
    (function (LPA_GapType) {
        /** With printer settings */
        LPA_GapType[LPA_GapType["Unset"] = 255] = "Unset";
        /** Continuous paper (receipt paper) */
        LPA_GapType[LPA_GapType["None"] = 0] = "None";
        /** Positioning hole */
        LPA_GapType[LPA_GapType["Hole"] = 1] = "Hole";
        /** Gap Paper */
        LPA_GapType[LPA_GapType["Gap"] = 2] = "Gap";
        /** Black Label Paper */
        LPA_GapType[LPA_GapType["Black"] = 3] = "Black";
    })(exports.LPA_GapType || (exports.LPA_GapType = {}));
    /**
     * Common values ​​for printing speed.
     *
     * The actual valid value is between 0 and 4. 255 means it depends on the printer settings. Other values ​​are invalid.
     */
    exports.LPA_PrintSpeed = void 0;
    (function (LPA_PrintSpeed) {
        /** With printer settings */
        LPA_PrintSpeed[LPA_PrintSpeed["Unset"] = 255] = "Unset";
        /** Slowest */
        LPA_PrintSpeed[LPA_PrintSpeed["Min"] = 0] = "Min";
        /** Slow */
        LPA_PrintSpeed[LPA_PrintSpeed["Low"] = 1] = "Low";
        /** Normal speed */
        LPA_PrintSpeed[LPA_PrintSpeed["Normal"] = 2] = "Normal";
        /** Block */
        LPA_PrintSpeed[LPA_PrintSpeed["High"] = 3] = "High";
        /** Fastest */
        LPA_PrintSpeed[LPA_PrintSpeed["Max"] = 4] = "Max";
    })(exports.LPA_PrintSpeed || (exports.LPA_PrintSpeed = {}));
    /**
     * Common enumeration values ​​for print density.
     *
     * The print density can be any value between 0 and 14. 255 means it depends on the printer settings. Other values ​​are invalid.
     */
    exports.LPA_PrintDarkness = void 0;
    (function (LPA_PrintDarkness) {
        /** With printer settings */
        LPA_PrintDarkness[LPA_PrintDarkness["Unset"] = 255] = "Unset";
        /** Lightest */
        LPA_PrintDarkness[LPA_PrintDarkness["Min"] = 0] = "Min";
        /** Lighter */
        LPA_PrintDarkness[LPA_PrintDarkness["Low"] = 3] = "Low";
        /** Normal concentration */
        LPA_PrintDarkness[LPA_PrintDarkness["Normal"] = 5] = "Normal";
        /** Thick */
        LPA_PrintDarkness[LPA_PrintDarkness["High"] = 9] = "High";
        /** The most concentrated */
        LPA_PrintDarkness[LPA_PrintDarkness["Max"] = 14] = "Max";
    })(exports.LPA_PrintDarkness || (exports.LPA_PrintDarkness = {}));
    /**
     * The alignment of the print action.
     */
    exports.LPA_ItemAlignment = void 0;
    (function (LPA_ItemAlignment) {
        /** Horizontally left (vertically top) alignment */
        LPA_ItemAlignment[LPA_ItemAlignment["Start"] = 0] = "Start";
        /** Horizontal (vertical) center alignment */
        LPA_ItemAlignment[LPA_ItemAlignment["Center"] = 1] = "Center";
        /** Horizontally right (vertically bottom) alignment */
        LPA_ItemAlignment[LPA_ItemAlignment["End"] = 2] = "End";
        /** Stretch (fill extra space with blanks) */
        LPA_ItemAlignment[LPA_ItemAlignment["Stretch"] = 3] = "Stretch";
        /** Enlarge (extra space is filled by enlarging) */
        LPA_ItemAlignment[LPA_ItemAlignment["Expand"] = 4] = "Expand";
    })(exports.LPA_ItemAlignment || (exports.LPA_ItemAlignment = {}));
    /**
     * Font style.
     */
    exports.LPA_FontStyle = void 0;
    (function (LPA_FontStyle) {
        /** General font style */
        LPA_FontStyle[LPA_FontStyle["Regular"] = 0] = "Regular";
        /** Bold */
        LPA_FontStyle[LPA_FontStyle["Bold"] = 1] = "Bold";
        /** Italic */
        LPA_FontStyle[LPA_FontStyle["Italic"] = 2] = "Italic";
        /** Bold Italic */
        LPA_FontStyle[LPA_FontStyle["BoldItalic"] = 3] = "BoldItalic";
        /** Underline */
        LPA_FontStyle[LPA_FontStyle["Underline"] = 4] = "Underline";
        /** Strikethrough */
        LPA_FontStyle[LPA_FontStyle["Strikeout"] = 8] = "Strikeout";
    })(exports.LPA_FontStyle || (exports.LPA_FontStyle = {}));
    /**
     * The automatic line-wrapping mode when drawing strings.
     */
    var LPA_AutoReturnMode;
    (function (LPA_AutoReturnMode) {
        /** No automatic line wrapping */
        LPA_AutoReturnMode[LPA_AutoReturnMode["None"] = 0] = "None";
        /** Automatically wrap words */
        LPA_AutoReturnMode[LPA_AutoReturnMode["Char"] = 1] = "Char";
        /** Automatically wrap words */
        LPA_AutoReturnMode[LPA_AutoReturnMode["Word"] = 2] = "Word";
    })(LPA_AutoReturnMode || (LPA_AutoReturnMode = {}));
    /**
     * One-dimensional barcode encoding type.
     *
     * UPC-A, UPC-E, EAN13, EAN8, ISBN are collectively referred to as product codes, and their encoding and display methods are similar;
     * Can only contain numbers. For codes that support two segments, use "+" as the separator between the two segments.
     * There is a check character, usually 0 to 9. For ISBN codes, the check character may be "X".
     */
    var LPA_BarcodeType;
    (function (LPA_BarcodeType) {
        /**
         * Supported lengths: 12, 12+2, 12+5, displayed as 1+5+5+1
         * Input length is 12: it means there is already a checksum;
         *            11: If there is no verification code, the program will automatically add it;
         *          < 11: add leading zeros and then automatically add a checksum;
         */
        LPA_BarcodeType[LPA_BarcodeType["LPA_1DBT_UPC_A"] = 20] = "LPA_1DBT_UPC_A";
        /**
         * Supported lengths are: 8, 8+2, 8+5, displayed as 1+6+1. The first digit is the coded number type.
         * can be 0/1, indicating the digital system used; the eighth bit is the check bit, which is checked using upc_check().
         * Input length is 8: It means that there is a check code. If the first character is not 0/1, it will be forced to be 0 for processing;
         *           7: If there is no checksum, the program will automatically add it. If the first character is not 0/1, it will be forced to be 0;
         *           6: If there is no checksum, the program will automatically add it. At the same time, the digital system 0 is used for encoding.
         *         < 6: Add leading 0s until the length reaches 6, and then encode.
         */
        LPA_BarcodeType[LPA_BarcodeType["LPA_1DBT_UPC_E"] = 21] = "LPA_1DBT_UPC_E";
        /**
         * Supported lengths are: 13, 13+2, 13+5, 8, 8+2, 8+5, 5, 2.
         * Input length is 13: it means there is a checksum already;
         *           12: If there is no verification code, the program will automatically add it;
         *         6~11: After adding the leading zero, it is treated as a length of 12;
         * Input length is 3/4/5: indicates that the encoding is an additional barcode with a length of 5;
         *             1/2: Indicates that the encoding is an additional barcode with a length of 2.
         */
        LPA_BarcodeType[LPA_BarcodeType["LPA_1DBT_EAN13"] = 22] = "LPA_1DBT_EAN13";
        /**
         * Internally processed with EAN13 encoding
         *
         * Input length is 8: it means there is already a checksum;
         * When the input length is greater than 8, it will be switched to EAN13 code for encoding;
         * When the input length is <= 5, it will be switched to EAN13 code for encoding;
         * Input length is 7: No checksum, the program will automatically add it;
         *           6: Add leading zeros and then automatically add a checksum;
         */
        LPA_BarcodeType[LPA_BarcodeType["LPA_1DBT_EAN8"] = 23] = "LPA_1DBT_EAN8";
        /**
         * 1、"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%"
         * 2. Use * as the leading and ending character for display (not included in the encoding, only for display)
         * 3. Each character is encoded with 10 characters (display length is 13)
         * 4. 10 leading characters (display length is 13), 9 ending characters (display length is 12)
         * ==》The number of characters is 10+ 9+10×N
         *        Display length 13+12+13×N
         *        10 characters 13+12+13×10 = 155 pixels
         * If the encoded content contains unsupported characters, it will switch to CODE 128 encoding;
         */
        LPA_BarcodeType[LPA_BarcodeType["LPA_1DBT_CODE39"] = 24] = "LPA_1DBT_CODE39";
        /**
         * 1、0~9
         * 2. After adding the checksum, the length must be an even number, otherwise 0 is added to the header.
         * 3. Each character is encoded with 5 characters (display length is 7)
         * 4, 4 leading characters (displayed length is 4), 3 trailing characters (displayed length is 4)
         * ==》The number of characters is 4 + 3 + 10*(N/2)
         *        Display length 4 + 4 + 14*(N/2)
         *        10 characters 4+4+14×5 = 78 pixels
         * If the encoded content contains unsupported characters, it will switch to CODE 128 encoding;
         */
        LPA_BarcodeType[LPA_BarcodeType["LPA_1DBT_ITF25"] = 25] = "LPA_1DBT_ITF25";
        /**
         * 1. "0123456789-$:/.+ABCD", mostly used in the medical field
         * 2. Leading/ending characters A to D will be converted to uppercase
         * 3. After adding the guide character/check code, the data is uniformly encoded;
         * 4. Each character is encoded with 8 characters (display length is 10 to 11)
         * ==》The number of characters is 8×N, and the display length is 10×N～11×N
         *        10 characters 10×10 + 11×2 = 122 pixels
         * If the encoded content contains unsupported characters, it will switch to CODE 128 encoding;
         */
        LPA_BarcodeType[LPA_BarcodeType["LPA_1DBT_CODABAR"] = 26] = "LPA_1DBT_CODABAR";
        /**
         * 0x00～0x7F
         * If the encoded content contains unsupported characters, it will switch to CODE 128 encoding;
         */
        LPA_BarcodeType[LPA_BarcodeType["LPA_1DBT_CODE93"] = 27] = "LPA_1DBT_CODE93";
        /**
         * 0x00～0xFF, CODE 128 A/B supports full characters, for CODE 128 C encoding:
         *
         * 1. There is a fixed check code, all of which are numbers and must be an even length.
         * 2. Start character 105, end character 106
         * 3. The barcode width range is 1 to 4, and each character is encoded with 7 characters (display length is 11)
         * ==》The number of characters is 7+7+7+7×(N/2)
         *        Display length 11+11+11+11×(N/2)
         *        10 characters 11+11+11+11×(10/2) = 88 pixels
         */
        LPA_BarcodeType[LPA_BarcodeType["LPA_1DBT_CODE128"] = 28] = "LPA_1DBT_CODE128";
        /**
         * 0~9, the last digit may be 0~9, X (check character)
         * 13: must be preceded by 978/979, encoded in EAN13, isbn13_check
         * 10: After adding the leading 978, encode it in EAN13, isbn_check
         * <=9: Add leading 0, check, then add leading 978, and encode using EAN 13
         * If the encoded content contains unsupported characters, it will switch to CODE 128 encoding;
         */
        LPA_BarcodeType[LPA_BarcodeType["LPA_1DBT_ISBN"] = 29] = "LPA_1DBT_ISBN";
        /**
         * EXTENDED CODE 39，0x00～0x7F
         *
         * For characters not supported by CODE 39, they are represented by two characters after being escaped.
         * If the encoded content contains unsupported characters, it will switch to CODE 128 encoding;
         */
        LPA_BarcodeType[LPA_BarcodeType["LPA_1DBT_ECODE39"] = 30] = "LPA_1DBT_ECODE39";
        /**
         * Automatically select the most suitable encoding type for encoding based on the encoding content.
         *
         * 1. ITF25 (when the content length is an even number and all of it is numbers)
         * 2. CODABAR (if the content starts with A/B/C/D and ends with A/B/C/D)
         * 3、CODE 39
         * 4、CODE 128
         */
        LPA_BarcodeType[LPA_BarcodeType["LPA_1DBT_AUTO"] = 60] = "LPA_1DBT_AUTO";
    })(LPA_BarcodeType || (LPA_BarcodeType = {}));
    /**
     * Print the task name.
     *
     * In the startJob interface, you can get different base64 images by setting different jobNames.
     */
    exports.LPA_JobNames = void 0;
    (function (LPA_JobNames) {
        /** Used to generate a white background preview image */
        LPA_JobNames["Preview"] = "#!#Preview#!#";
        /** Used to generate transparent images with transparent background */
        LPA_JobNames["Transparent"] = "#!#Transparent#!#";
        /** Default print task name */
        LPA_JobNames["Print"] = "dtpweb";
    })(exports.LPA_JobNames || (exports.LPA_JobNames = {}));
    /**
     * JSON data prints action parameters.
     */
    exports.LPA_PrintActions = void 0;
    (function (LPA_PrintActions) {
        /** Returns binary data for printing. */
        LPA_PrintActions[LPA_PrintActions["PrintData"] = 1] = "PrintData";
        /** Returns a BASE64-encoded preview image with a white background. Format: "data:image/png;base64,..." */
        LPA_PrintActions[LPA_PrintActions["PrevBase64"] = 2] = "PrevBase64";
        /** Returns the URL image for preview, eg: https://... */
        LPA_PrintActions[LPA_PrintActions["PrevUrl"] = 4] = "PrevUrl";
        /** Get the preview image with transparent background */
        LPA_PrintActions[LPA_PrintActions["Transparent"] = 128] = "Transparent";
        /** Get a BASE64 image with a transparent background */
        LPA_PrintActions[LPA_PrintActions["TransBase64"] = 130] = "TransBase64";
        /** Directly print the given JSON data */
        LPA_PrintActions[LPA_PrintActions["Print"] = 4096] = "Print";
    })(exports.LPA_PrintActions || (exports.LPA_PrintActions = {}));
    /** The mode for generating images when creating a preview task */
    var LPA_BackgroundMode;
    (function (LPA_BackgroundMode) {
        /** 直接打印 */
        LPA_BackgroundMode[LPA_BackgroundMode["Print"] = 0] = "Print";
        /** Generate a picture with a white background */
        LPA_BackgroundMode[LPA_BackgroundMode["White"] = 1] = "White";
        /** Generate a transparent background image */
        LPA_BackgroundMode[LPA_BackgroundMode["Transparent"] = 2] = "Transparent";
    })(LPA_BackgroundMode || (LPA_BackgroundMode = {}));
    var LPA_Result;
    (function (LPA_Result) {
        /** http request success status code */
        LPA_Result[LPA_Result["OK"] = 0] = "OK";
        /** Function parameter error */
        LPA_Result[LPA_Result["PARAM_ERROR"] = 1] = "PARAM_ERROR";
        /** System error, such as failure to create Windows object, insufficient memory, etc. */
        LPA_Result[LPA_Result["SYSTEM_ERROR"] = 2] = "SYSTEM_ERROR";
        /** No printer supported by LabelPrintAPI was found */
        LPA_Result[LPA_Result["NOSUPPORTED_PRINTER"] = 3] = "NOSUPPORTED_PRINTER";
        /** API does not support the printer with the specified name */
        LPA_Result[LPA_Result["UNSUPPORTED_PRINTER"] = 4] = "UNSUPPORTED_PRINTER";
        /** There is no data to print */
        LPA_Result[LPA_Result["NOPRINTDATA"] = 5] = "NOPRINTDATA";
        /** No page size information is printed */
        LPA_Result[LPA_Result["NOPAGEDIMENSION"] = 6] = "NOPAGEDIMENSION";
        /** Invalid image file */
        LPA_Result[LPA_Result["INVALID_FILE"] = 7] = "INVALID_FILE";
        /** Unsupported functionality */
        LPA_Result[LPA_Result["UNSUPPORTED_FUNCTION"] = 8] = "UNSUPPORTED_FUNCTION";
        /** Font name error */
        LPA_Result[LPA_Result["INVALID_FONTNAME"] = 9] = "INVALID_FONTNAME";
        /** Network request failed */
        LPA_Result[LPA_Result["NETWORK_FAILD"] = 90] = "NETWORK_FAILD";
        /** Network request timeout */
        LPA_Result[LPA_Result["NETWORK_TIMEOUT"] = 91] = "NETWORK_TIMEOUT";
        /** Network request error */
        LPA_Result[LPA_Result["NETWORK_ERROR"] = 92] = "NETWORK_ERROR";
        /** The network request was canceled */
        LPA_Result[LPA_Result["NETWORK_ABORT"] = 93] = "NETWORK_ABORT";
        /** Unsupported http request environment */
        LPA_Result[LPA_Result["NETWORK_UNSUPPORT"] = 94] = "NETWORK_UNSUPPORT";
        /** Unknown network exception caught */
        LPA_Result[LPA_Result["NETWORK_EXCEPTION"] = 95] = "NETWORK_EXCEPTION";
    })(LPA_Result || (LPA_Result = {}));
    /**
     * One-dimensional barcode encoding type.
     */
    var LPA_BarcodeFlags;
    (function (LPA_BarcodeFlags) {
        /** No human-readable characters are displayed. */
        LPA_BarcodeFlags[LPA_BarcodeFlags["ShowReadNone"] = 0] = "ShowReadNone";
        /** Are human-readable characters displayed below the barcode? */
        LPA_BarcodeFlags[LPA_BarcodeFlags["ShowReadDown"] = 1] = "ShowReadDown";
        /** Are human-readable characters displayed above the barcode? */
        LPA_BarcodeFlags[LPA_BarcodeFlags["ShowReadUp"] = 2] = "ShowReadUp";
        /** Do you want to display the start and end characters of CODE 39? */
        LPA_BarcodeFlags[LPA_BarcodeFlags["ShowStartStop"] = 4] = "ShowStartStop";
        /** Do you want to automatically correct the checksum character of the product code? */
        LPA_BarcodeFlags[LPA_BarcodeFlags["EanCheckCode"] = 8] = "EanCheckCode";
    })(LPA_BarcodeFlags || (LPA_BarcodeFlags = {}));
    /**
     * QRCode string encoding method.
     */
    var LPA_QRTextEncoding;
    (function (LPA_QRTextEncoding) {
        /** Unicode encoding */
        LPA_QRTextEncoding[LPA_QRTextEncoding["Unicode"] = 0] = "Unicode";
        /** Ansi/DBCS encoding */
        LPA_QRTextEncoding[LPA_QRTextEncoding["Ansi"] = 1] = "Ansi";
        /** UTF-8 encoding */
        LPA_QRTextEncoding[LPA_QRTextEncoding["UTF8"] = 2] = "UTF8";
    })(LPA_QRTextEncoding || (LPA_QRTextEncoding = {}));
    /**
     * QRCode encoding mode.
     */
    var LPA_QREncodeMode;
    (function (LPA_QREncodeMode) {
        /** Numeric mode */
        LPA_QREncodeMode[LPA_QREncodeMode["ModeNum"] = 0] = "ModeNum";
        /** Alphabet-numeric mode */
        LPA_QREncodeMode[LPA_QREncodeMode["ModeAn"] = 1] = "ModeAn";
        /**8-bit data mode */
        LPA_QREncodeMode[LPA_QREncodeMode["Mode8Bit"] = 2] = "Mode8Bit";
        /**Kanji (shift-jis) mode */
        LPA_QREncodeMode[LPA_QREncodeMode["ModeKanji"] = 3] = "ModeKanji";
        /**Internal use only */
        LPA_QREncodeMode[LPA_QREncodeMode["ModeStructure"] = 4] = "ModeStructure";
        /**ECI mode */
        LPA_QREncodeMode[LPA_QREncodeMode["ModeEci"] = 5] = "ModeEci";
        /**FNC1, first position */
        LPA_QREncodeMode[LPA_QREncodeMode["ModeFnc1First"] = 6] = "ModeFnc1First";
        /**FNC1, second position */
        LPA_QREncodeMode[LPA_QREncodeMode["ModeFnc1Second"] = 7] = "ModeFnc1Second";
    })(LPA_QREncodeMode || (LPA_QREncodeMode = {}));
    /**
     * QRCode error correction mode.
     */
    var LPA_QREccLevel;
    (function (LPA_QREccLevel) {
        /** Low */
        LPA_QREccLevel[LPA_QREccLevel["EccLevel_L"] = 0] = "EccLevel_L";
        /** Middle */
        LPA_QREccLevel[LPA_QREccLevel["EccLevel_M"] = 1] = "EccLevel_M";
        /** Quality */
        LPA_QREccLevel[LPA_QREccLevel["EccLevel_Q"] = 2] = "EccLevel_Q";
        /** High */
        LPA_QREccLevel[LPA_QREccLevel["EccLevel_H"] = 3] = "EccLevel_H";
    })(LPA_QREccLevel || (LPA_QREccLevel = {}));
    /**
     * Pdf417 string encoding.
     */
    var LPA_P417TextEncoding;
    (function (LPA_P417TextEncoding) {
        /** Unicode encoding */
        LPA_P417TextEncoding[LPA_P417TextEncoding["Unicode"] = 0] = "Unicode";
        /** Ansi/DBCS encoding */
        LPA_P417TextEncoding[LPA_P417TextEncoding["Ansi"] = 1] = "Ansi";
        /** UTF-8 encoding */
        LPA_P417TextEncoding[LPA_P417TextEncoding["UTF8"] = 2] = "UTF8";
    })(LPA_P417TextEncoding || (LPA_P417TextEncoding = {}));
    /**
     * Pdf417 encoding mode.
     */
    var LPA_P417EncodeMode;
    (function (LPA_P417EncodeMode) {
        /** Auto mode */
        LPA_P417EncodeMode[LPA_P417EncodeMode["ModeAuto"] = 0] = "ModeAuto";
        /** Numeric mode */
        LPA_P417EncodeMode[LPA_P417EncodeMode["ModeNumeric"] = 1] = "ModeNumeric";
        /** Text mode */
        LPA_P417EncodeMode[LPA_P417EncodeMode["ModeText"] = 2] = "ModeText";
        /** Binary mode */
        LPA_P417EncodeMode[LPA_P417EncodeMode["ModeBinary"] = 3] = "ModeBinary";
    })(LPA_P417EncodeMode || (LPA_P417EncodeMode = {}));
    /**
     * Pdf417 error correction mode.
     */
    var LPA_P417EccLevel;
    (function (LPA_P417EccLevel) {
        /** Auto */
        LPA_P417EccLevel[LPA_P417EccLevel["EccLevel_Auto"] = 0] = "EccLevel_Auto";
        /** 1 */
        LPA_P417EccLevel[LPA_P417EccLevel["EccLevel_1"] = 1] = "EccLevel_1";
        /** 2 */
        LPA_P417EccLevel[LPA_P417EccLevel["EccLevel_2"] = 2] = "EccLevel_2";
        /** 3 */
        LPA_P417EccLevel[LPA_P417EccLevel["EccLevel_3"] = 3] = "EccLevel_3";
        /** 4 */
        LPA_P417EccLevel[LPA_P417EccLevel["EccLevel_4"] = 4] = "EccLevel_4";
        /** 5 */
        LPA_P417EccLevel[LPA_P417EccLevel["EccLevel_5"] = 5] = "EccLevel_5";
        /** 6 */
        LPA_P417EccLevel[LPA_P417EccLevel["EccLevel_6"] = 6] = "EccLevel_6";
        /** 7 */
        LPA_P417EccLevel[LPA_P417EccLevel["EccLevel_7"] = 7] = "EccLevel_7";
        /** 8 */
        LPA_P417EccLevel[LPA_P417EccLevel["EccLevel_8"] = 8] = "EccLevel_8";
    })(LPA_P417EccLevel || (LPA_P417EccLevel = {}));
    /**
     * The type of printer device obtained.
     */
    var LPA_DeviceType;
    (function (LPA_DeviceType) {
        /** Local printer */
        LPA_DeviceType[LPA_DeviceType["Local"] = 1] = "Local";
        /** Printers on other computers in the LAN */
        LPA_DeviceType[LPA_DeviceType["Net"] = 2] = "Net";
        /** Printers with built-in network functions in the LAN */
        LPA_DeviceType[LPA_DeviceType["Wifi"] = 3] = "Wifi";
    })(LPA_DeviceType || (LPA_DeviceType = {}));
    var LPA_SourceImageFormat;
    (function (LPA_SourceImageFormat) {
        /**
         * Raw print data passed directly to the printer
         */
        LPA_SourceImageFormat[LPA_SourceImageFormat["LPASIF_RAWDATA"] = 0] = "LPASIF_RAWDATA";
        /**
         * Each dot is represented by one bit of black and white dot matrix data, 1 represents a black dot (need to be printed), 0 represents a white dot
         *
         * Data is stored in rows from top to bottom, and the number of bytes required for each row is (width + 7) / 8.
         * Each byte represents 8 points, the high bit represents the point on the left, and the low bit represents the point on the right.
         */
        LPA_SourceImageFormat[LPA_SourceImageFormat["LPASIF_BPP_1"] = 1] = "LPASIF_BPP_1";
        /**
         * Same as LPASIF_BPP_1, except that 0 represents black dots (need to be printed) and 1 represents white dots
         */
        LPA_SourceImageFormat[LPA_SourceImageFormat["LPASIF_BPP_1N"] = 2] = "LPASIF_BPP_1N";
        /**
         * Each point is represented by four bytes of dot matrix data, and the four bytes represent RGBA in sequence
         */
        LPA_SourceImageFormat[LPA_SourceImageFormat["LPASIF_32_RGBA"] = 32] = "LPASIF_32_RGBA";
        /**
         * Each point is represented by four bytes of dot matrix data, and the four bytes represent BGRA in sequence
         */
        LPA_SourceImageFormat[LPA_SourceImageFormat["LPASIF_32_BGRA"] = 33] = "LPASIF_32_BGRA";
        /**
         * Each dot is represented by four bytes of dot matrix data. The four bytes represent RGB in sequence. The highest byte is not used.
         */
        LPA_SourceImageFormat[LPA_SourceImageFormat["LPASIF_32_RGB"] = 34] = "LPASIF_32_RGB";
        /**
         * Each point is represented by four bytes of dot matrix data. The four bytes represent BGR in sequence. The highest byte is not used.
         */
        LPA_SourceImageFormat[LPA_SourceImageFormat["LPASIF_32_BGR"] = 35] = "LPASIF_32_BGR";
        /**
         * The dot matrix data in the simple message format, 1 represents a black dot (need to be printed), and 0 represents a white dot. For label printing, the compression efficiency is still good.
         *
         * Print line: Ax Leading zero byte number Print byte number xxxxxx
         *        The 4 bits of the first byte are used for leading zeros, and 2 bits are used for printing bytes, which means that the maximum print data size is 1K bytes and 8K dots.
         * Print line: B0 xxxxxx
         *        The number of printed bytes is equal to the number of row bytes of the dot matrix data, (width + 7) / 8.
         * Repeat row: Bx
         *        The 4 bits of the first byte are used for the row number, which means the maximum number of rows is 15.
         * Blank line: 110xxxxx (i.e. Cx/Dx)
         *        The first 5 bits are used for the row number, which means the maximum number of rows is 31.
         */
        LPA_SourceImageFormat[LPA_SourceImageFormat["LPASIF_PACKAGE"] = 90] = "LPASIF_PACKAGE";
        /**
         * Image file data, supports almost all common image file formats such as PNG/JPG/BMP, etc.
         *
         * If the image file data is encoded using Base64 (by setting dLen = 0), the characters that begin with the string such as
         * The header string of "data:image/png;base64," is widely used in JS to indicate images.
         * Data format. The interface will automatically search for some characters in the header until it finds "," . If "," is not found, the data starts from the beginning.
         */
        LPA_SourceImageFormat[LPA_SourceImageFormat["LPASIF_IMAGEDATA"] = 93] = "LPASIF_IMAGEDATA";
    })(LPA_SourceImageFormat || (LPA_SourceImageFormat = {}));
    var LPA_ContentType;
    (function (LPA_ContentType) {
        LPA_ContentType[LPA_ContentType["UrlEncoded"] = 0] = "UrlEncoded";
        LPA_ContentType[LPA_ContentType["Base64"] = 1] = "Base64";
        LPA_ContentType[LPA_ContentType["Json"] = 2] = "Json";
    })(LPA_ContentType || (LPA_ContentType = {}));
    const utils = {
        assignValue(target, src) {
            const result = target ? target : {};
            for (const key in src) {
                if (Object.prototype.hasOwnProperty.call(src, key)) {
                    if (this.isPlainObject(result[key]) && this.isPlainObject(src[key])) {
                        this.assignValue(result[key], src[key]);
                    }
                    else if (this.isPlainObject(src[key])) {
                        result[key] = this.assignValue({}, src[key]);
                    }
                    else if (Array.isArray(src[key])) {
                        result[key] = src[key].slice();
                    }
                    else {
                        result[key] = src[key];
                    }
                }
            }
            //
            return result;
        },
        merge(target, ...other) {
            let result = target ? target : {};
            if (!other)
                return result;
            //
            for (let i = 0; i < other.length; i++) {
                result = this.assignValue(result, other[i]);
            }
            //
            return result;
        },
        isObject(val) {
            return val !== null && typeof val === 'object';
        },
        isPlainObject(val) {
            if (toString.call(val) !== '[object Object]') {
                return false;
            }
            var prototype = Object.getPrototypeOf(val);
            return prototype === null || prototype === Object.prototype;
        },
        isFunction(val) {
            return toString.call(val) === '[object Function]';
        },
        isStream(val) {
            return this.isObject(val) && this.isFunction(val.pipe);
        },
        isArrayBuffer(val) {
            return toString.call(val) === '[object ArrayBuffer]';
        },
        isArray(val) {
            return Array.isArray ? Array.isArray(val) : Object.prototype.toString.call(val) === '[object Array]';
        },
        isString(val) {
            return typeof val === 'string';
        },
        isNumber(val) {
            return typeof val === 'number';
        },
        isHttpsRequest(protocol) {
            return /https:?/.test(protocol);
        },
        parseArray(val, count = 1) {
            const arr = [];
            if (utils.isArray(val))
                return val;
            if (typeof val === 'string')
                return val.split(',');
            if (typeof val === 'number') {
                for (let i = 0; i < count; i++) {
                    arr.push(val);
                }
            }
            return arr;
        },
        parseMargin(options) {
            var _a, _b, _c, _d;
            let margins = [];
            if (options.margin) {
                margins = utils.parseArray(options.margin, 4);
                if (margins.length === 1) {
                    margins = [margins[0], margins[0], margins[0], margins[0]];
                }
                else if (margins.length === 2) {
                    margins = [margins[0], margins[1], margins[0], margins[1]];
                }
                else if (margins.length === 3) {
                    margins.push(margins[1]);
                }
            }
            if (options.marginH) {
                const arr = utils.parseArray(options.marginH, 2);
                margins[1] = (_a = arr[0]) !== null && _a !== void 0 ? _a : 0;
                margins[3] = (_b = arr[1]) !== null && _b !== void 0 ? _b : arr[0];
            }
            if (options.marginV) {
                const arr = utils.parseArray(options.marginV, 2);
                margins[0] = (_c = arr[0]) !== null && _c !== void 0 ? _c : 0;
                margins[2] = (_d = arr[1]) !== null && _d !== void 0 ? _d : arr[0];
            }
            return margins;
        },
        getParamString(data) {
            data = data || {};
            const values = [];
            for (const key in data) {
                const v = data[key];
                if (v === null || v === undefined)
                    continue;
                if (typeof v !== 'object' && typeof v !== 'function') {
                    values.push(`${key}=${encodeURIComponent(v)}`);
                }
            }
            return values.length > 0 ? values.join('&') : '';
        },
        getRequestData(keys, values) {
            if (values === null || values === undefined)
                values = [];
            else if (typeof values !== 'object') {
                values = [values];
            }
            //
            if (values.length && typeof values[0] === 'object')
                return values[0];
            //
            const obj = {};
            if (typeof keys === 'string')
                keys = [keys];
            if (keys.length < 1 || !keys[0])
                return obj;
            //
            for (let i = 0; i < keys.length; i++) {
                obj[keys[i]] = values[i];
            }
            return obj;
        },
        buildURL(baseUrl, param) {
            const paramArgs = typeof param === 'string' ? param : this.getParamString(param);
            return paramArgs ? `${baseUrl}:${paramArgs}` : baseUrl;
        },
        request(config, resolve) {
            if (typeof XMLHttpRequest !== 'undefined') {
                this.requestXMLHttp(config, resolve);
            }
            else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
                this.requestNodeHttp(config, resolve);
            }
            else {
                resolve({
                    statusCode: LPA_Result.NETWORK_UNSUPPORT,
                    resultInfo: 'not supported http request environment!',
                });
            }
        },
        requestXMLHttp(config, resolve) {
            let http = new XMLHttpRequest();
            const ipAddress = config.host || CONSTANTS.IP;
            const port = config.port || CONSTANTS.PORT1;
            const baseUrl = config.baseUrl || `http://${ipAddress}:${port}`;
            let data = config.data;
            var requestHeaders = config.headers;
            let result;
            if (config.url && config.url[0] === '/')
                config.url = config.url.substring(1);
            let requestUrl = `${baseUrl}/${config.url}`;
            try {
                http.open(config.method || CONSTANTS.METHOD_GET, requestUrl, !config.sync);
                // Set the request timeout in MS
                // Note: timeout cannot be used in synchronous interfaces, otherwise an exception will be thrown.
                if (config.timeout && !config.sync)
                    http.timeout = config.timeout;
                //
                const onloadend = () => {
                    if (!http) {
                        return;
                    }
                    if (http.status === 200) {
                        // The request was successful;
                        result = JSON.parse(http.responseText);
                    }
                    else {
                        // Request failed;
                        result = {
                            statusCode: LPA_Result.NETWORK_FAILD,
                            resultInfo: http.responseText,
                        };
                    }
                    resolve(result);
                    // Clean up request
                    http = null;
                };
                //
                if ('onloadend' in http) {
                    // Use onloadend if available
                    http.onloadend = onloadend;
                }
                else {
                    // Listen for ready state to emulate onloadend
                    // Request result processing function;
                    http.onreadystatechange = function () {
                        if (!http || http.readyState !== 4) {
                            return;
                        }
                        // The request errored out and we didn't get a response, this will be
                        // handled by onerror instead
                        // With one exception: request that using file: protocol, most browsers
                        // will return status as 0 even though it's a successful request
                        if (http.status === 0 && !(http.responseURL && http.responseURL.indexOf('file:') === 0)) {
                            return;
                        }
                        // readystate handler is calling before onerror or ontimeout handlers,
                        // so we should call onloadend on the next 'tick'
                        setTimeout(onloadend);
                    };
                }
                // Handle browser request cancellation (as opposed to a manual cancellation)
                http.onabort = function handleAbort() {
                    if (!http) {
                        return;
                    }
                    resolve({
                        statusCode: LPA_Result.NETWORK_ABORT,
                        resultInfo: 'Request aborted!',
                    });
                    // Clean up request
                    http = null;
                };
                // Handle low level network errors
                http.onerror = function handleError() {
                    // Real errors are hidden from us by the browser
                    // onerror should only fire if it's a network error
                    resolve({
                        statusCode: LPA_Result.NETWORK_ERROR,
                        resultInfo: 'Network Error',
                    });
                    // Clean up request
                    http = null;
                };
                // Handle timeout
                http.ontimeout = function handleTimeout() {
                    resolve({
                        statusCode: LPA_Result.NETWORK_TIMEOUT,
                        resultInfo: config.timeout ? `timeout of ${config.timeout}ms exceeded` : 'timeout exceeded',
                    });
                    // Clean up request
                    http = null;
                };
                // Add headers to the request
                if (requestHeaders && 'setRequestHeader' in http) {
                    for (let key in requestHeaders) {
                        if (typeof data === 'undefined' && key.toLowerCase() === 'content-type') {
                            // Remove Content-Type if data is undefined
                            delete requestHeaders[key];
                        }
                        else {
                            // Otherwise add header to the request
                            http.setRequestHeader(key, requestHeaders[key]);
                        }
                    }
                }
                http.send(data);
            }
            catch (e) {
                resolve({
                    statusCode: LPA_Result.NETWORK_EXCEPTION,
                    resultInfo: e,
                });
            }
        },
        requestNodeHttp(config, resolve) {
            const http = require('http');
            if (config.url && config.url[0] !== '/')
                config.url = `/${config.url}`;
            //
            const options = {
                host: config.host || CONSTANTS.IP,
                port: config.port || CONSTANTS.PORT1,
                method: config.method || CONSTANTS.METHOD_GET,
                path: config.url,
                headers: config.headers,
            };
            let response = '';
            // Send a request
            const client = http.request(options, function (res) {
                //  res is the response
                // 'data' This event is triggered when the request body data arrives, providing a chunk representing the received data
                res.on('data', (chunk) => {
                    response += chunk;
                });
                // 'end' event division when the request body data transmission is completed and there is no more data
                res.on('end', () => {
                    let result = {
                        statusCode: LPA_Result.NETWORK_EXCEPTION,
                        resultInfo: response,
                    };
                    try {
                        result = JSON.parse(response);
                    }
                    catch (error) {
                        console.log(error);
                    }
                    resolve(result);
                });
                res.on('error', (err) => {
                    if (http.aborted)
                        return;
                    resolve({
                        statusCode: LPA_Result.NETWORK_ERROR,
                        resultInfo: err,
                    });
                });
            });
            // Handle errors
            // Triggered when http request is abnormal
            client.on('error', (err) => {
                resolve({
                    statusCode: LPA_Result.NETWORK_FAILD,
                    resultInfo: err,
                });
            });
            // set tcp keep alive to prevent drop connection by peer
            client.on('socket', (socket) => {
                // default interval of sending ack packet is 1 minute
                socket.setKeepAlive(true, 1000 * 60);
            });
            // Handle request timeout
            if (config.timeout) {
                // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
                // var timeout = parseInt(config.timeout, 10);
                const timeout = config.timeout;
                // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
                // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
                // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
                // And then these socket which be hang up will devoring CPU little by little.
                // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
                client.setTimeout(timeout, () => {
                    client.destroy();
                    resolve({
                        statusCode: LPA_Result.NETWORK_TIMEOUT,
                        resultInfo: config.timeout ? `timeout of ${config.timeout}ms exceeded` : 'timeout exceeded',
                    });
                });
            }
            // Send the request
            client.end(config.data);
        },
        /**
         * If the current unit is millimeter, you need to convert millimeter to 0.01 millimeter because the current interface does not support millimeter unit.
         */
        unitConvert(value) {
            return value ? value * 100 : value;
        },
        poundToMm(value) {
            return (value * 25.4) / 72;
        },
        mmToPound(value) {
            return (value * 72) / 25.4;
        },
        unitConvertOfDrawBase(options, margins) {
            options = options || {};
            const margin = margins || [];
            // offset1 represents Margin
            const offsetX1 = margin[3] || 0;
            const offsetY1 = margin[0] || 0;
            // offset2 represents the offset specified by the user
            const offsetX2 = margin[4] || 0;
            const offsetY2 = margin[5] || 0;
            const x = options.x || 0;
            const y = options.y || 0;
            //
            options.x = this.unitConvert(x + offsetX1 + offsetX2);
            options.y = this.unitConvert(y + offsetY1 + offsetY2);
            options.width = this.unitConvert(options.width);
            options.height = this.unitConvert(options.height);
            // The underlying interface only supports 0, 1, 2, 3
            if (options.orientation && options.orientation > 3) {
                options.orientation = (options.orientation / 90);
            }
            //
            return options;
        },
        unitConvertOfFillRect(options, margins) {
            options = this.unitConvertOfDrawBase(options, margins);
            //
            options.width = options.width || this.unitConvert(CONSTANTS.RECT_WIDTH);
            options.height = options.height || options.width;
            options.cornerWidth = this.unitConvert(options.cornerWidth);
            options.cornerHeight = this.unitConvert(options.cornerHeight) || options.cornerWidth;
            //
            return options;
        },
        unitConvertOfDrawRect(options, margins) {
            options = this.unitConvertOfFillRect(options, margins);
            options.lineWidth = this.unitConvert(options.lineWidth || CONSTANTS.LINE_WIDTH);
            //
            return options;
        },
        unitConvertOfLine(options, margins) {
            var _a, _b;
            options = options || {};
            const margin = margins || [];
            const offsetX1 = margin[3] || 0;
            const offsetY1 = margin[0] || 0;
            //
            const offsetX2 = margin[4] || 0;
            const offsetY2 = margin[5] || 0;
            const x1 = options.x1 || 0;
            const y1 = options.y1 || 0;
            const x2 = (_a = options.x2) !== null && _a !== void 0 ? _a : x1;
            const y2 = (_b = options.y2) !== null && _b !== void 0 ? _b : y1;
            //
            options.x1 = this.unitConvert(x1 + offsetX1 + offsetX2);
            options.y1 = this.unitConvert(y1 + offsetY1 + offsetY2);
            options.x2 = this.unitConvert(x2 + offsetX1 + offsetX2);
            options.y2 = this.unitConvert(y2 + offsetY1 + offsetY2);
            options.lineWidth = this.unitConvert(options.lineWidth || CONSTANTS.LINE_WIDTH);
            // The string is finally sent as a string, so no special processing is required for the string.
            if (!options.dashLens && utils.isArray(options.dashLen)) {
                options.dashLens = options.dashLen;
                options.dashLen = undefined;
            }
            else if (!options.dashLen && typeof options.dashLens === 'string') {
                options.dashLen = options.dashLens;
                options.dashLens = undefined;
            }
            // First convert the string into an array to facilitate unit conversion
            if (typeof options.dashLen === 'string') {
                options.dashLens = options.dashLen.split(',');
            }
            if (options.dashLens && options.dashLens.length > 0) {
                if (options.dashLens.length === 1)
                    options.dashLens.push(options.dashLens[0]);
                for (let i = 0; i < options.dashLens.length; i++) {
                    options.dashLens[i] = this.unitConvert(options.dashLens[i]);
                }
                options.dashLen = options.dashLens.join(',');
                options.dashCount = options.dashLens.length;
            }
            // The underlying interface only supports 0, 1, 2, 3
            if (options.orientation && options.orientation > 3) {
                options.orientation = (options.orientation / 90);
            }
            //
            return options;
        },
        getTimeout(timeout, type) {
            if (timeout && timeout > 0)
                return timeout;
            return type === LPA_DeviceType.Local ? CONSTANTS.TIME_OUT : CONSTANTS.OUTER_TIME_OUT;
        },
        getAgent() {
            return navigator.userAgent.toLowerCase() || '';
        },
        isWin32() {
            const agent = this.getAgent();
            return agent.indexOf('win32') || agent.indexOf('wow32');
        },
        isWin64() {
            const agent = this.getAgent();
            return agent.indexOf('win64') || agent.indexOf('wow64');
        },
        isWindows() {
            const agent = this.getAgent();
            return agent.indexOf('win') >= 0 || agent.indexOf('wow') >= 0;
        },
        isMac() {
            return /macintosh|mac os x/i.test(this.getAgent());
        },
    };

    /**
     * @file dtpweb.ts
     * @author DothanTech (hudianxing@dothantech.com)
     * @brief PC JavaScript version of the LPAPI interface asynchronous encapsulation, the underlying layer is based on the dtpweb printing interface.
     * @version 2.1
     * @date 2022-06-27
     *
     * @copyright Copyright (c) 2022
     *
     */
    //
    let instance = undefined;
    /**
     * Asynchronous encapsulation of the PC JavaScript version LPAPI interface, based on the dtpweb printing interface.
     */
    class DTPWeb {
        constructor() {
            //
            this._labelWidth = 0;
            this._labelHeight = 0;
            // 边距，索引从0-3分别表示top|right|bottom|left
            this._margins = [];
        }
        /**
         * Get the interface instance.
         *
         * @param {InitOptions | undefined} interface initialization configuration.
         * @return {DTPWeb} returns a global {@link DTPWeb} interface instance.
         *
         * @deprecated Deprecated, use {@link DTPWeb.getInstance().checkPlugin()} instead.
         */
        static getApi(options) {
            this.getInstance(options).checkPlugin((api) => {
                if (options && typeof options.callback === 'function') {
                    options.callback(api);
                }
            });
            return this.getInstance();
        }
        /**
         * Get a single instance interface object.
         *
         * @param options interface initialization configuration information.
         *
         * @returns Returns a single instance interface object.
         */
        static getInstance(options) {
            const api = instance || (instance = new DTPWeb());
            api.init(options);
            return api;
        }
        getIpAddress(ip) {
            return ip || this._ip || this._initIp;
        }
        getPort(port) {
            return port || this._port || this._initPort;
        }
        getDeviceType(type) {
            return type || this._deviceType || LPA_DeviceType.Local;
        }
        getFontName(v) {
            return v || this._fontName || CONSTANTS.FONT_NAME;
        }
        getFontHeight(v) {
            return v || this._fontHeight || CONSTANTS.FONT_HEIGHT;
        }
        getLineWidth(v) {
            return v || this._lineWidth || CONSTANTS.LINE_WIDTH;
        }
        getRadius(v) {
            return v || this._radius || CONSTANTS.RADIUS;
        }
        getCornerWidth(v) {
            return v || this._cornerWidth || CONSTANTS.CORNER_RADIUS;
        }
        parseMargin(options) {
            this._margins.splice(0);
            const margin = utils.parseMargin(options);
            for (let i = 0; i < 4; i++) {
                // *1 The purpose is to convert the string type into a number;
                this._margins[i] = (margin[i] || 0) * 1;
            }
            //
            return this._margins;
        }
        setFontName(v) {
            this._fontName = v;
        }
        setOffsetX(v) {
            this._margins[4] = v;
        }
        setOffsetY(v) {
            this._margins[5] = v;
        }
        /**
         * Interface initialization configuration.
         */
        init(options) {
            const opts = options || {};
            if (opts.ip)
                this._initIp = opts.ip;
            //
            if (opts.fontName)
                this._fontName = opts.fontName;
            if (opts.fontHeight)
                this._fontHeight = opts.fontHeight;
            if (opts.lineWidth)
                this._lineWidth = opts.lineWidth;
            if (opts.radius)
                this._radius = opts.radius;
        }
        /**
         * Check if the plugin is available.
         *
         * @param {(api?: DTPWeb) => void | undefined} callback Plugin detection result callback function.
         *
         * @returns {Promise<DTPWeb|undefined>} Is the plugin available? udefined means the plugin is not available.
         */
        async checkPlugin(callback) {
            const newCallback = (api) => {
                console.log(api ? '★★★ Printing assistant is running normally ★★★' : '★★★ Printing assistant not detected ★★★');
                if (callback)
                    callback(api);
            };
            // Detect the primary port
            let value = await this.checkPort(CONSTANTS.PORT1);
            // Detect alternate port
            if (!value)
                value = await this.checkPort(CONSTANTS.PORT2);
            //
            newCallback(value);
            //
            return value;
        }
        /**
         * Checks whether the specified port number is available.
         *
         * @param {number | undefined} port The target port to be detected. If not specified, the default port is {@link CONSTANTS.PORT1}.
         * @param {(api?: DTPWeb) => void} callback Port detection callback function, the parameter indicates whether the port is available.
         *
         * @return {Promise<DTPWeb|undefined>} Whether the port is available, undefined means the port is unavailable, otherwise it is available.
         */
        async checkPort(port, callback) {
            console.log(`$$$$ DTPWEB request: checkPort $$$$`);
            //
            const ip = this._initIp || CONSTANTS.IP;
            if (!instance)
                instance = this;
            //
            return new Promise((resolve) => {
                utils.request({
                    host: ip,
                    port: port || this._port,
                    url: `${CONTROLS.LOCAL}/${ACTIONS.ServerInfo}`,
                    sync: false,
                    timeout: CONSTANTS.TIME_OUT,
                }, (result) => {
                    console.log(`## onResponse: checkPlugin ##`);
                    console.log(result);
                    const newCallback = (api) => {
                        if (typeof callback === 'function')
                            callback(api);
                        resolve(api);
                    };
                    // If statusCode is less than 90, it means the network request environment is fine.
                    if (result && result.statusCode < LPA_Result.NETWORK_FAILD) {
                        if (!this._initIp)
                            this._initIp = ip;
                        if (port)
                            this._initPort = port;
                        newCallback(this);
                    }
                    else {
                        newCallback(undefined);
                    }
                });
            });
        }
        /**
         * Request the web server.
         *
         * @param {LPA_RequestOptions | string} options HTTP request related configuration options.
         * @param {any} data request parameter;
         */
        async requestApi(options, data = undefined) {
            const config = utils.getRequestData(['action'], [options]);
            console.log(`$$$$ DTPWEB request: ${config.action} $$$$`);
            console.log(config);
            if (data)
                console.log(data);
            // Raw data
            data = data || {};
            // post request parameters.
            let postData = config.data || data.data;
            if (data.data) {
                data.data = undefined;
            }
            // get request parameters
            const getParams = utils.getParamString(config.params || data);
            const urlParams = getParams ? `?${getParams}` : '';
            const control = config.control || CONTROLS.LPAPI;
            const deviceType = this.getDeviceType(config.deviceType);
            const timeout = utils.getTimeout(config.timeout, deviceType);
            //
            return new Promise((resolve) => {
                // The value of Content-Type is limited to one of the following three. Otherwise, a preflight request will be triggered, turning the POST request into an OPTIONS request.
                // text/plain
                // multipart/form-data
                // application/x-www-form-urlencoded
                // post data
                if (config.contentType === LPA_ContentType.Json) {
                    postData = JSON.stringify(postData || data);
                }
                else if (config.contentType !== LPA_ContentType.Base64) {
                    postData = getParams;
                }
                // content type
                let contentType = CONTENT_TYPE.UrlEncoded;
                if (config.contentType === LPA_ContentType.Json) {
                    contentType = CONTENT_TYPE.Json;
                }
                else if (config.contentType === LPA_ContentType.Base64) {
                    contentType = CONTENT_TYPE.Base64;
                }
                //
                utils.request({
                    method: 'POST',
                    // It is best not to configure an IP address for the local printer, otherwise an error will be reported when requesting 192.168.xxx.xxx in https mode.
                    host: this.getIpAddress(deviceType === LPA_DeviceType.Local ? undefined : config.ip),
                    port: this.getPort(config.port),
                    url: `${control}/${config.action}${urlParams}`,
                    params: data,
                    headers: {
                        'Content-type': contentType,
                    },
                    data: postData,
                    sync: false,
                    timeout: timeout,
                }, (result) => {
                    console.log(`## onResponse: ${config.action} ##`);
                    console.log(result);
                    resolve(result);
                });
            });
        }
        /**
         * Get the rotation angle of the current operation.
         */
        async getItemOrientation() {
            const resp = await this.requestApi(ACTIONS.GetItemOrientation);
            return resp === null || resp === void 0 ? void 0 : resp.resultInfo;
        }
        /**
         * Set the rotation angle for subsequent operations.
         * @param {0|90|180|270} orientation rotation angle, value is: `0`, `90`, `180`, `270`;
         *
         * @deprecated Deprecated interface. It is recommended to set the corresponding `orientation` option directly in the drawing options when performing drawing operations.
         */
        async setItemOrientation(orientation) {
            const data = utils.getRequestData(['orientation'], [orientation]);
            const resp = await this.requestApi(ACTIONS.SetItemOrientation, data);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Get the horizontal alignment of the current operation.
         */
        async getItemHorizontalAlignment() {
            const resp = await this.requestApi(ACTIONS.GetItemHorizontalAlignment);
            return resp === null || resp === void 0 ? void 0 : resp.resultInfo;
        }
        /**
         * Sets the horizontal alignment of subsequent operations.
         *
         * @param {LPA_ItemAlignment} alignment alignment.
         *
         *      0: left alignment;
         *      1: Center and align;
         *      2: right-aligned;
         *      3: stretching;
         *      4: Zoom in.
         *
         * @deprecated Deprecated interface. It is recommended to set the `horizontalAlignment` option directly in the drawing options when performing related drawing operations.
         */
        async setItemHorizontalAlignment(alignment) {
            const data = utils.getRequestData(['alignment'], [alignment]);
            const resp = await this.requestApi(ACTIONS.SetItemHorizontalAlignment, data);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Get the vertical alignment of the current operation.
         */
        async getItemVerticalAlignment() {
            const resp = await this.requestApi(ACTIONS.GetItemVerticalAlignment);
            return resp === null || resp === void 0 ? void 0 : resp.resultInfo;
        }
        /**
         * Sets the vertical alignment of subsequent operations.
         *
         * @param {LPA_ItemAlignment} alignment vertical alignment.
         *
         *          0: vertically on top;
         *          1: vertical center;
         *          2: vertically down;
         *          3: stretching;
         *          4: Zoom in.
         *
         * @deprecated Deprecated interface. It is recommended to set the `verticalAlignment` option directly in the corresponding drawing options when performing drawing operations.
         */
        async setItemVerticalAlignment(alignment) {
            const data = utils.getRequestData(['alignment'], [alignment]);
            const resp = await this.requestApi(ACTIONS.SetItemVerticalAlignment, data);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Search for printers in the local area network.
         *
         * It is recommended to get the printer list through {@link getPrinters()} 2 seconds after the search command is issued.
         *
         * @param mode Printer search mode, the default value is 1.
         * @returns success or failure.
         */
        async discoveryPrinters(mode) {
            const resp = await this.requestApi(ACTIONS.DiscoveryPrinters, {
                mode: mode !== null && mode !== void 0 ? mode : 1,
            });
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Get a list of printers.
         *
         * @param {LPA_PrinterOptions} printer device related options.
         *
         * @param {boolean|undefined} options.onlyOnline Should we only get online (connected) printers? Default is true.
         * @param {boolean|undefined} options.onlyLocal Should only local printers be obtained? Defaults to true.
         * @param {boolean|undefined} options.onlySupported Should only supported printers be obtained? Defaults to true.
         *
         * @return {Promise<LPA_Device[]>} returns the printer device list.
         */
        async getPrinters(options) {
            var _a;
            options = utils.getRequestData(['onlyOnline'], [options]);
            //
            options.onlyOnline = typeof options.onlyOnline === 'boolean' ? options.onlyOnline : true;
            options.onlySupported = true;
            //
            const resp = await this.requestApi({
                action: ACTIONS.GetPrinters,
                timeout: 5000,
            }, options);
            return ((_a = resp === null || resp === void 0 ? void 0 : resp.resultInfo) === null || _a === void 0 ? void 0 : _a.printers) || [];
        }
        /**
         * Opens the specified printer.
         *
         * @param {string|LPA_Printer|undefined} printer Printer name or object.
         *
         * @param {string|undefined} printer.printerName The target printer name.
         * @param {string|undefined} printer.ip The target printer IP address. If not specified, it means connecting to a local printer.
         *
         * @return {Promise<boolean>} Whether the target printer is successfully connected.
         */
        async openPrinter(printer) {
            const options = utils.getRequestData(['name'], [printer]);
            //
            const resp = await this.requestApi({
                action: ACTIONS.OpenPrinter,
                // In order to avoid the last linked printer affecting the current printer link, if the user does not specify the target printer related information, it is best to specify the initial information here.
                ip: options.ip || this._initIp,
                port: options.port || this._initPort,
                deviceType: options.type || LPA_DeviceType.Local,
                // In Linux, a 5-second timeout is set for connecting to Bluetooth devices. In order to obtain the accurate connection status, you need to wait a little longer.
                timeout: 10000,
            }, options);
            if ((resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK) {
                // To avoid cross-domain issues under https, if the printer is a local printer, no related configuration will be set.
                if (options.type && options.type !== LPA_DeviceType.Local) {
                    this._ip = options.ip;
                    this._port = options.port;
                    this._deviceType = options.type;
                }
                //
                return true;
            }
            return false;
        }
        /**
         * Get the name of the connected printer.
         */
        async getPrinterName() {
            var _a;
            return (_a = (await this.requestApi(ACTIONS.GetPrinterName))) === null || _a === void 0 ? void 0 : _a.resultInfo;
        }
        /**
         * Determine whether the printer is turned on.
         */
        async isPrinterOpened() {
            var _a;
            return ((_a = (await this.requestApi(ACTIONS.IsPrinterOpened))) === null || _a === void 0 ? void 0 : _a.statusCode) === LPA_Result.OK;
        }
        /**
         * Determine whether the current printer is online.
         */
        async isPrinterOnline() {
            var _a;
            if (utils.isWindows()) {
                return ((_a = (await this.requestApi(ACTIONS.IsPrinterOnline))) === null || _a === void 0 ? void 0 : _a.statusCode) === LPA_Result.OK;
            }
            return false;
        }
        /**
         * Close the printer if it is turned on.
         *
         * @info When the printer is turned off, the current unprinted tasks/data will be automatically submitted for printing, and all parameter settings will be retained.
         */
        async closePrinter() {
            var _a;
            return ((_a = (await this.requestApi(ACTIONS.ClosePrinter))) === null || _a === void 0 ? void 0 : _a.statusCode) === LPA_Result.OK;
        }
        /**
         * Display the printer properties setting interface or preference setting interface.
         *
         * @param {LPA_PrinterPropertyOptions} options Printer related options.
         *
         * @param {string|undefined} options.printerName The printer name. If it is empty, the currently opened printer properties or printing preferences will be opened.
         * @param {boolean|undefined} options.showDocument Should printer preferences be displayed? Defaults to true.
         *          true: Indicates display preference setting interface;
         *          false:The printer properties setting interface is displayed.
         *
         * @warning If the printer has been opened by the openPrinter function before calling this interface, printerName does not need to be specified.
         */
        async showProperty(data) {
            let resp;
            if (utils.isWindows()) {
                data.showDocument = typeof data.showDocument === 'boolean' ? data.showDocument : true;
                resp = await this.requestApi(ACTIONS.ShowProperty, data);
            }
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Get printing related parameters.
         *
         * @param {LPA_ParamID} id Print parameter ID. For ID value, refer to {@link LPA_ParamID}.
         *
         * @return {Promise<number>} value refers to the value type corresponding to different IDs in {@link LPA_ParamID}.
         */
        async getParam(id) {
            const data = utils.getRequestData(['id'], [id]);
            //
            const resp = await this.requestApi(ACTIONS.GetParam, data);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK ? resp.resultInfo : -1;
        }
        /**
         * Set printing parameters;
         *
         * @param {number|LPA_PrintParamOptions} options Print parameter related options.
         *
         * @param {LPA_ParamID} options.id Printer parameter ID. For ID value, refer to {@link LPA_ParamID}.
         * @param {number} options.value The value of the printer parameter corresponding to the id value. For details, please refer to {@link LPA_ParamID}.
         *
         * @return {boolean} Success or not?
         */
        async setParam(options) {
            options = utils.getRequestData(['id'], [options]);
            //
            const resp = await this.requestApi(ACTIONS.SetParam, options);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Get the paper type of the connected printer.
         */
        async getGapType() {
            return this.getParam(exports.LPA_ParamID.GapType);
        }
        /**
         * Modify the paper type of the connected printer.
         *
         * @param {LPA_GapType} value Paper type.
         */
        async setGapType(value) {
            return this.setParam({
                id: exports.LPA_ParamID.GapType,
                value: value,
            });
        }
        /**
         * Returns the print density of the connected printer.
         *
         * @return {number} For printer density value description, please refer to {@link LPA_PrintDarkness};
         */
        async getPrintDarkness() {
            return this.getParam(exports.LPA_ParamID.PrintDarkness);
        }
        /**
         * Modify the print density of the connected printer.
         *
         * @param {number} value Print density.
         */
        async setPrintDarkness(value) {
            return await this.setParam({
                id: exports.LPA_ParamID.PrintDarkness,
                value: value,
            });
        }
        /**
         * Returns the print speed of the connected printer.
         */
        async getPrintSpeed() {
            return this.getParam(exports.LPA_ParamID.PrintSpeed);
        }
        /**
         * Modify the print speed of the connected printer.
         *
         * @param {number} value Print speed, refer to {@link LPA_PrintSpeed}.
         */
        async setPrintSpeed(value) {
            return this.setParam({
                id: exports.LPA_ParamID.PrintSpeed,
                value: value,
            });
        }
        /**
         * Get the resolution of the printer (valid after the printer is successfully connected).
         */
        async getPrinterDPI() {
            return this.getParam(exports.LPA_ParamID.PrinterDPI);
        }
        /**
         * Create a print job.
         *
         * When creating a print task, if there is no linked printer, this function will automatically open the first LPAPI-supported printer installed in the current system for printing.
         * There are still unprinted tasks, and all the existing print data will be discarded.
         *
         * @param {LPA_JobPrintOptions} options Label task options.
         *
         * @param {number} options.width Label width, in millimeters, the default value is {@link CONSTANTS.LABEL_WIDTH}.
         * @param {number} options.height Label height, in millimeters, the default value is {@link CONSTANTS.LABEL_HEIGHT}.
         * @param {0|90|180|270} options.orientation Label printing direction, `0` means no rotation, `90` means 90 degrees right rotation, `180` means 180 degrees rotation, `270` means 90 degrees left rotation, the default is 0.
         * @param {string|undefined} options.jobName Printing task name. Tasks in special cases are not printed. It can be used to generate corresponding preview images.
         *          The value during preview can be referenced to: {@link LPA_JobNames}. The default value is {@link LPA_JobNames.Print}, which indicates a print task.
         */
        async startJob(options) {
            options = utils.getRequestData(['width'], [options]);
            const margins = this.parseMargin(options);
            //
            this._labelWidth = options.width || CONSTANTS.LABEL_WIDTH;
            this._labelHeight = options.height || CONSTANTS.LABEL_HEIGHT;
            //
            options.scaleUnit = 1;
            options.width = utils.unitConvert(options.width + margins[1] + margins[3]);
            options.height = utils.unitConvert(options.height + margins[0] + margins[2]);
            options.jobName = options.jobName || exports.LPA_JobNames.Print;
            //
            const resp = await this.requestApi(ACTIONS.StartJob, options);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Create a preview task.
         *
         * @param {LPA_JobPrintOptions} options Label task options.
         *
         * @param {number} options.width Label width, in millimeters, the default value is {@link CONSTANTS.LABEL_WIDTH}.
         * @param {number} options.height Label height, in millimeters, the default value is {@link CONSTANTS.LABEL_HEIGHT}.
         * @param {0|90|180|270} options.orientation Label printing direction, `0` means no rotation, `90` means 90 degrees right rotation, `180` means 180 degrees rotation, `270` means 90 degrees left rotation, the default is 0.
         * @param {LPA_BackgroundMode|undefined} options.backgroundMode The mode for generating preview images. For values, refer to {@link LPA_BackgroundMode}.
         *          Defaults to {@link LPA_BackgroundMode.Transparent}.
         */
        async startPreview(options) {
            options = utils.getRequestData(['width'], [options]);
            //
            this._labelWidth = options.width || CONSTANTS.LABEL_WIDTH;
            this._labelHeight = options.height || CONSTANTS.LABEL_HEIGHT;
            //
            options.scaleUnit = 1;
            options.width = utils.unitConvert(options.width);
            options.height = utils.unitConvert(options.height);
            //
            const resp = await this.requestApi(ACTIONS.StartPreview, options);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         *  Cancel the current print job.
         *
         *  Instructions for use: All unprinted tasks/data will be discarded, but all parameter settings will be retained.
         */
        async abortJob() {
            this.requestApi(ACTIONS.AbortJob);
        }
        /**
         * Submit the print job and actually print it.
         *
         * @param {PrintOptions|undefined} options related printing parameters.
         *
         * @param {number|undefined} options.copies Number of copies to print.
         * @param {number|undefined} options.orientation Printing direction, default is `0`.
         *          `0` means no rotation, `90` means 90 degrees right rotation, `180` means 180 degrees rotation, and `270` means 90 degrees left rotation.
         * @param {number|undefined} options.threshold The threshold for converting images to black and white. The default value is {@link CONSTANTS.THRESHOLD}, which is 192.
         * @param {LPA_PrintSpeed|undefined} options.speed Print speed, the default is determined by the printer settings.
         * @param {LPA_PrintDarkness|undefined} options.darkness Print density, default depends on the printer settings.
         * @param {LPA_GapType|undefined} options.gapType Paper type, default depends on the printer settings.
         */
        async commitJob(options) {
            const resp = await this.requestApi(ACTIONS.CommitJob, options);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Get the ID of the most recent print job.
         *
         * @return Print task ID.
         */
        async getJobID() {
            if (utils.isWindows()) {
                const resp = await this.requestApi(ACTIONS.GetJobID);
                return resp === null || resp === void 0 ? void 0 : resp.resultInfo;
            }
            else {
                return 0;
            }
        }
        /**
         * Get the status information of the print task.
         * @param {LPA_JobInfo} options Task options.
         *
         * @param {string|undefined} options.printerName The printer name. If it is empty, it means the currently opened printer.
         * @param {number|undefined} options.jobID Print task ID, 0 indicates the most recent print task.
         *
         * @return Returns the task information in the format of JOB_INFO_1. NULL is used to measure the number of bytes of space required.
         */
        async getJobInfo(options) {
            if (utils.isWindows()) {
                const resp = await this.requestApi(ACTIONS.GetJobInfo, options);
                return resp === null || resp === void 0 ? void 0 : resp.resultInfo;
            }
            else {
                return undefined;
            }
        }
        /**
         * Get the print task information of the print task that has just been completed.
         *
         * @return {LPA_PageInfo} returns the information of the print task just completed
         */
        async getPageInfo() {
            const resp = await this.requestApi(ACTIONS.GetPageInfo);
            return resp === null || resp === void 0 ? void 0 : resp.resultInfo;
        }
        /**
         * * Get the page image data of the printing task just completed.
         * @param {LPA_PageImageOptions} options parameter options.
         *
         * @param {number|undefined} options.page The index of the total number of pages obtained through getPageInfo. The default is 0, indicating the first page.
         * @param {LPA_SourceImageFormat|undefined} options.format The data format of the obtained image. For details, please refer to {@link LPA_SourceImageFormat}.
         *          The default value is {@link LPA_SourceImageFormat.LPASIF_IMAGEDATA}, which means that the image data in BASE64 format is returned.
         *
         * @return {LPA_PageImage} returns the page image data.
         */
        async getPageImage(options) {
            options = utils.getRequestData(['page'], [options]);
            const resp = await this.requestApi(ACTIONS.GetPageImage, options);
            return resp === null || resp === void 0 ? void 0 : resp.resultInfo;
        }
        /**
         * Start printing a page.
         *
         * @info If StartJob has not been called before, this function will automatically call StartJob and then start printing a page. When EndPage is called to end printing, the print job will be automatically submitted for printing.
         *       When the page rotation angle is not 0, the print page size information must be set before printing.
         */
        async startPage() {
            var _a;
            return ((_a = (await this.requestApi(ACTIONS.StartPage))) === null || _a === void 0 ? void 0 : _a.statusCode) === LPA_Result.OK;
        }
        /**
         * End of printing a page.
         *
         * @info If StartJob is not called before and StartPage is called directly, this function will automatically submit for printing.
         */
        async endPage() {
            var _a;
            return ((_a = (await this.requestApi(ACTIONS.EndPage))) === null || _a === void 0 ? void 0 : _a.statusCode) === LPA_Result.OK;
        }
        /**
         * Set whether the drawing function returns detailed drawing information?
         *
         * @param options string printing related parameters.
         *
         * @param {boolean|undefined} options.returnDrawResult Whether the drawing function returns detailed drawing information.
         */
        async returnDrawResult(options) {
            var _a;
            const opts = utils.getRequestData(['returnDrawResult'], [options]);
            opts.returnDrawResult = (_a = opts.returnDrawResult) !== null && _a !== void 0 ? _a : true;
            //
            const resp = await this.requestApi(ACTIONS.ReturnDrawResult, opts);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /*********************************************************************
         * Draw related content.
         *********************************************************************/
        /**
         * Converts the given millimeter value to point value.
         *
         * This function is often used to convert font size units when drawing strings.
         *
         * @param value The value to be converted, in millimeters.
         * @returns The converted value in pounds.
         */
        mm2Pound(value) {
            return utils.mmToPound(value);
        }
        /**
         * Converts the given point value to millimeters.
         *
         * This function is often used to convert font size units when drawing strings.
         *
         * @param value The value to be converted, in pounds.
         * @returns The converted value in millimeters.
         */
        pound2Mm(value) {
            return utils.poundToMm(value);
        }
        /**
         * Draw the text.
         *
         * regionCorners regionLeftUpCorner regionRightUpCorner regionRightBottomCorner
         * regionLeftBottomCorner regionLeftBorders regionRightBorders, these parameters are length
         * Array, it is recommended to pass parameters through array, so that the interface will automatically forward the length to 0.01mm used by the interface
         * units. For debugging convenience, these parameters can also be used as comma-separated strings. However, the parameters must be called
         * The length data is forwarded in units of 0.01mm.
         *
         * @param {DrawTextOptions} options Text drawing related options.
         *
         * @param {string} options.text The text data to be drawn.
         * @param {number|undefined} options.x The horizontal coordinate position of the drawing object, in millimeters. The default value is 0.
         * @param {number|undefined} options.y The vertical coordinate position of the drawing object, in millimeters. The default value is 0.
         * @param {number|undefined} options.width The display width of the drawing object, in millimeters.
         *          The default value is 0, which means there is no limit on the drawing width.
         * @param {number|undefined} options.height The display height of the drawn object, in millimeters.
         *          The default value is 0, which means that the height is not displayed and the actual height is displayed.
         * @param {string|undefined} options.fontName The font name of the drawing object. The default value is {@link CONSTANTS.FONT_NAME}.
         * @param {number} options.fontHeight The font height of the drawn object, in millimeters.
         *          The value defaults to {@link CONSTANTS.FONT_HEIGHT}.
         * @param {LPA_FontStyle|undefined} options.fontStyle font style, default is {@link LPA_FontStyle.Regular}.
         * @param {LPA_AutoReturnMode|undefined} options.autoReturn automatic line break mode, default is {@link LPA_AutoReturnMode.Char}.
         *          {@link LPA_AutoReturnMode.None}: No automatic line wrap;
         *          {@link LPA_AutoReturnMode.Char}: wrap by word;
         *          {@link LPA_AutoReturnMode.Word}: Wrap by word.
         * @param {number|undefined} options.charSpace character spacing, default is 0, unit is millimeter.
         * @param {number|string|undefined} options.lineSpace line spacing, in millimeters,
         *          Or an enumeration string (1_0, 1_2, 1_5, 2_0). The default is 1_0, which means single line spacing.
         * @param {number|undefined} options.leadingIndent Four parameters for first line indent, default is 0. Choose one from the four, leadingIndent has the highest priority.
         *          0         : means no first line indent;
         *          1 ~ 999   : Indicates that the first line is indented to the left by N/10 Chinese characters (character height)
         *          1000      : Indicates that the first line is indented to the left to the Chinese colon, English colon, English colon + English space
         *          > 1000    : ScaleUnit indicating that the first line is indented to the left (N - 1000)
         *          -999 ~ -1 : Indicates that the first line is indented to the right -N/10 Chinese characters (character height)
         *          < -1000   : ScaleUnit representing the first line indent to the right (-N - 1000)
         * @param {number|undefined} options.leadingIndentChars, indent the first line according to the specified number of Chinese characters.
         *          The value can be a decimal, for example, 1.5 means 1.5 Chinese characters / 3 English characters. > 0 means the first line is indented to the left, < 0 means the first line is indented to the right.
         * @param {number|undefined} options.leadingIndentMM Indent the first line according to the specified number of millimeters.
         *          > 0 means the first line is indented to the left, < 0 means the first line is indented to the right.
         * @param {boolean|undefined} options.leadingIndentColon means the first line is indented to the left to the Chinese colon, English colon, or English colon + English space.
         * @param {number[]|string|undefined} regionCorners The deletion rectangles of the four corners of the display area, which are upper left, upper right, lower right, and lower left. The format is:
         *          `[Width, Height, Width, Height, Width, Height, Width, Height]`，Unit: millimeters.
         * @param {number[]|string|undefined} regionLeftUpCorner The deletion rectangle of the upper left corner of the display region, the format is: `[Width, Height]`, unit is millimeters.
         * @param {number[]|string|undefined} regionRightUpCorner The deletion rectangle of the upper right corner of the display region, the format is: `[Width, Height]`, unit is millimeters.
         * @param {number[]|string|undefined} regionRightBottomCorner The deletion rectangle of the lower right corner of the display region, the format is: `[Width, Height]`, unit is millimeters.
         * @param {number[]|string|undefined} regionLeftBottomCorner The deletion rectangle of the lower left corner of the display region, the format is: `[Width, Height]`, unit is millimeters.
         * @param {number[]|string|undefined} regionLeftBorders The deletion rectangle on the left side of the display region. A maximum of two rectangles can be deleted.
         *          The format is: `[Width, Y, Height, Width, Y, Height]`, and the unit is millimeters.
         * @param {number[]|string|undefined} regionRightBorders The deletion rectangle on the right side of the display region. A maximum of two rectangles can be deleted.
         *          The format is: `[Width, Y, Height, Width, Y, Height]`, and the unit is millimeters.
         * @param {boolean|undefined} onlyMeasureText means only measuring without actually drawing the text.
         * @param {0|90|180|270|undefined} options.orientation The rotation angle, 0, 90, 180, 270.
         *          If not specified, it means using the parameter set by {@link setItemOrientation()}. The default value is 0, which means no rotation.
         * @param {LPA_ItemAlignment|undefined} options.horizontalAlignment horizontal alignment. Not specifying means using the parameter set by {@link setItemHorizontalAlignment()}.
         *          The default value is {@link LPA_ItemAlignment.Start}, which means left alignment.
         * @param {LPA_ItemAlignment|undefined} options.verticalAlignment vertical alignment. Not specifying means using the parameter set by {@link setItemVerticalAlignment()}.
         *          The default value is: {@link LPA_ItemAlignment.Start}, which means top alignment.
         */
        async drawText(options) {
            options = utils.getRequestData(['text'], [options]);
            if (!options.text)
                return false;
            //
            options.fontHeight = this.getFontHeight(options.fontHeight || options.height);
            //
            options = utils.unitConvertOfDrawBase(options, this._margins);
            options.fontName = this.getFontName(options.fontName);
            options.fontHeight = utils.unitConvert(options.fontHeight);
            //
            options.charSpace = utils.unitConvert(options.charSpace);
            if (typeof options.lineSpace === 'number')
                options.lineSpace = utils.unitConvert(options.lineSpace);
            // indentation
            if (!options.leadingIndent) {
                if (options.leadingIndentChars) {
                    // leadingIndent = 10 means indenting 1 character to the left.
                    options.leadingIndent = options.leadingIndentChars * 10;
                    delete options.leadingIndentChars;
                }
                else if (options.leadingIndentMM) {
                    // leadingIndent = 1100, indicating a 1mm indent to the left.
                    if (options.leadingIndentMM >= 0.01)
                        options.leadingIndent = options.leadingIndentMM * 100 + 1000;
                    else if (options.leadingIndentMM <= -0.01)
                        options.leadingIndent = options.leadingIndentMM * 100 - 1000;
                    //
                    delete options.leadingIndentMM;
                }
                else if (options.leadingIndentColon) {
                    // 1000 means automatically searching for colons (":" or ":") in the string and indenting according to the length before the colon (including the colon).
                    options.leadingIndent = 1000;
                    delete options.leadingIndentColon;
                }
            }
            if (options.leadingIndent === 0)
                delete options.leadingIndent;
            // Drawing area
            if (Array.isArray(options.regionCorners)) {
                for (let i = 0; i < options.regionCorners.length; i++) {
                    options.regionCorners[i] = utils.unitConvert(options.regionCorners[i]);
                }
                options.regionCorners = options.regionCorners.join(',');
            }
            if (!options.regionCorners) {
                const cornerList = [];
                // leftUp
                if (options.regionLeftUpCorner) {
                    cornerList[0] = options.regionLeftUpCorner;
                    delete options.regionLeftUpCorner;
                }
                if (options.regionRightUpCorner) {
                    cornerList[1] = options.regionRightUpCorner;
                    delete options.regionRightUpCorner;
                }
                if (options.regionRightBottomCorner) {
                    cornerList[2] = options.regionRightBottomCorner;
                    delete options.regionRightBottomCorner;
                }
                if (options.regionLeftBottomCorner) {
                    cornerList[3] = options.regionLeftBottomCorner;
                    delete options.regionLeftBottomCorner;
                }
                //
                if (cornerList.length > 0) {
                    const strList = [];
                    for (let i = 0; i < 4; i++) {
                        let cornerItems = cornerList[i];
                        // Convert the string to an array first
                        if (typeof cornerItems === 'string') {
                            cornerItems = cornerItems.split(',');
                        }
                        strList[i] = '0,0';
                        // Perform unit conversion on each field.
                        if (Array.isArray(cornerItems)) {
                            if (cornerItems.length > 2)
                                cornerItems = cornerItems.slice(0, 2);
                            for (let j = 0; j < 2; j++)
                                cornerItems[j] = utils.unitConvert(cornerItems[j] || 0);
                            strList[i] = cornerItems.join(',');
                        }
                    }
                    options.regionCorners = strList.join(',');
                }
            }
            if (options.regionLeftBorders) {
                let segments = options.regionLeftBorders;
                if (typeof options.regionLeftBorders === 'string')
                    segments = options.regionLeftBorders.split(',');
                if (Array.isArray(segments) && segments.length > 2) {
                    for (let i = 0; i < segments.length; i++) {
                        segments[i] = utils.unitConvert(segments[i]);
                    }
                    options.regionLeftBorders = segments.join(',');
                }
                else {
                    delete options.regionLeftBorders;
                }
            }
            if (options.regionRightBorders) {
                let segments = options.regionRightBorders;
                if (typeof segments === 'string')
                    segments = segments.split(',');
                if (Array.isArray(segments) && segments.length > 2) {
                    for (let i = 0; i < segments.length; i++) {
                        segments[i] = utils.unitConvert(segments[i]);
                    }
                    options.regionRightBorders = segments.join(',');
                }
                else {
                    delete options.regionRightBorders;
                }
            }
            //
            const resp = await this.requestApi(ACTIONS.DrawText, options);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Print 1D barcode.
         *
         * @param {DrawBarcodeOptions} options One-dimensional code drawing related options.
         *
         * @param {string} options.text The one-dimensional code data to be drawn.
         * @param {number|undefined} options.x The horizontal coordinate position of the drawing object, in millimeters. The default value is 0.
         * @param {number|undefined} options.y The vertical coordinate position of the drawing object, in millimeters. The default value is 0.
         * @param {number|undefined} options.width The display width of the drawing object, in millimeters.
         *          The default value is 0, which means that the object width is automatically calculated based on the point size set by {@link barPixels}.
         * @param {number|undefined} options.height The display height of the drawn object, in millimeters.
         *          The default value is 0, which means that the object width is automatically calculated based on the point size set by {@link barPixels}.
         * @param {number|undefined} options.textHeight The height of the human-readable text in the one-dimensional code, in millimeters.
         *          The default value is 0, which means that the string below the one-dimensional code is not displayed.
         * @param {LPA_BarcodeType|undefined} options.type One-dimensional code type, the default is {@link LPA_BarcodeType.LPA_1DBT_AUTO}, which means automatically using the best method based on the string.
         * @param {string|undefined} options.fontName The font name for human-readable text in the one-dimensional code. The default is {@link CONSTANTS.FONT_NAME}.
         * @param {LPA_FontStyle|undefined} options.fontStyle The font style of the one-dimensional code for human-readable text. The default is {@link LPA_FontStyle.Regular}, which means displaying the regular font style.
         * @param {LPA_ItemAlignment|undefined} options.textAlignment 一维码供人识读文本的水平对齐方式，值参考{@link LPA_ItemAlignment}，
         *          >= 5 indicates the horizontal alignment of the code. The default is {@link LPA_ItemAlignment.Center}, which means center alignment.
         * @param {LPA_BarcodeFlags|undefined} options.barcodeFlags One-dimensional code encoding parameter flags, the value refers to {@link LPA_BarcodeFlags}, the default is ShowReadDown | ShowStartStop | EanCheckCode.
         * @param {number} options.barPixels If the width of the one-dimensional code is not specified, the pixel size of each logical point in the one-dimensional code is in pixels. The value can be any value between 1 and 7. The default value is 2.
         * @param {number|undefined} options.textBarSpace The vertical spacing between the human-readable text and the barcode in the one-dimensional code, in millimeters. The default value is about 2 pixels.
         * @param {0|90|180|270|undefined} options.orientation The rotation angle, 0, 90, 180, 270.
         *          If not specified, it means using the parameter set by {@link setItemOrientation()}. The default value is 0, which means no rotation.
         * @param {LPA_ItemAlignment|undefined} options.horizontalAlignment horizontal alignment. Not specifying means using the parameter set by {@link setItemHorizontalAlignment()}.
         *          The default value is {@link LPA_ItemAlignment.Start}, which means left alignment.
         * @param {LPA_ItemAlignment|undefined} options.verticalAlignment vertical alignment. Not specifying means using the parameter set by {@link setItemVerticalAlignment()}.
         *          The default value is: {@link LPA_ItemAlignment.Start}, which means top alignment.
         */
        async draw1DBarcode(options) {
            options = utils.getRequestData(['text'], [options]);
            if (!options.text)
                return false;
            //
            options = utils.unitConvertOfDrawBase(options, this._margins);
            options.textHeight = utils.unitConvert(options.textHeight);
            options.textBarSpace = utils.unitConvert(options.textBarSpace);
            options.fontName = this.getFontName(options.fontName);
            //
            const resp = await this.requestApi(ACTIONS.Draw1DBarcode, options);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Print QrCode.
         *
         * @param {DrawQrcodeOptions} options QRCode drawing related parameters.
         *
         * @param {string} options.text The QR code data to be drawn.
         * @param {number|undefined} options.x The horizontal coordinate position of the drawing object, in millimeters.
         * @param {number|undefined} options.y The vertical coordinate position of the drawing object, in millimeters.
         * @param {number|undefined} options.width The display width of the drawing object, in millimeters
         *          The default value is 0, which means that the QR code size is automatically calculated based on the point size set by {@link qrcPixels}.
         * @param {number|undefined} options.height The display height of the drawn object. If not specified, it will be displayed according to: {@link width}, in millimeters.
         * @param {LPA_QRTextEncoding|undefined} options.textEncoding string encoding method, the value refers to {@link LPA_QRTextEncoding}, the default is {@link LPA_QRTextEncoding.UTF8}.
         * @param {number|undefined} options.qrcPixels indicates the number of pixels for each logical point of the QR code when the display width of the QR code is not specified. The default value is 2 pixels.
         * @param {number|number} options.qrcVersion The minimum version number of the QR code, 1~40, the default is automatically calculated based on the content.
         * @param {LPA_QREncodeMode|undefined} options.encodeMode QR code encoding mode, the value refers to {@link LPA_QREncodeMode}, the default is {@link LPA_QREncodeMode.ModeNum}.
         *          If the encoded content requires a higher level encoding mode, the program will automatically upgrade the mode.
         * @param {LPA_QREccLevel|undefined} options.eccLevel QR code error correction mode, the value refers to {@link LPA_QREccLevel}, the default is {@link LPA_QREccLevel.EccLevel_L}.
         * @param {0|90|180|270|undefined} options.orientation The rotation angle, 0, 90, 180, 270.
         *          If not specified, it means using the parameter set by {@link setItemOrientation()}. The default value is 0, which means no rotation.
         * @param {LPA_ItemAlignment|undefined} options.horizontalAlignment horizontal alignment. Not specifying means using the parameter set by {@link setItemHorizontalAlignment()}.
         *          The default value is {@link LPA_ItemAlignment.Start}, which means left alignment.
         * @param {LPA_ItemAlignment|undefined} options.verticalAlignment vertical alignment. Not specifying means using the parameter set by {@link setItemVerticalAlignment()}.
         *          The default value is: {@link LPA_ItemAlignment.Start}, which means top alignment.
         */
        async draw2DQRCode(options) {
            options = utils.getRequestData(['text'], [options]);
            if (!options.text)
                return false;
            //
            options = utils.unitConvertOfDrawBase(options, this._margins);
            if (!options.height)
                options.height = options.width;
            //
            const resp = await this.requestApi(ACTIONS.Draw2DQRCode, options);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Print Pdf417 QR code.
         *
         * @param {DrawPdf417Options} options PDF417 QR code drawing options.
         *
         * @param {string} options.text The PDF417 QR code data to be drawn.
         * @param {number|undefined} options.x The horizontal coordinate position of the drawing object, in millimeters, the default value is 0.
         * @param {number|undefined} options.y The vertical coordinate position of the drawing object, in millimeters, the default value is 0.
         * @param {number|undefined} options.width The display width of the drawing object, in millimeters
         *          The default value is 0, which means that the QR code width is automatically calculated based on the size set by {@link p417Pixels}.
         * @param {number|undefined} options.height The display height of the drawn object, in millimeters
         *          The default value is 0, which means that the QR code height is automatically calculated based on the size set by {@link p417Pixels}.
         * @param {number|undefined} options.textEncoding string encoding, {@link LPA_P417TextEncoding}, default is {@link LPA_P417TextEncoding.UTF8}.
         * @param {number|undefined} options.p417Pixels The number of pixels per logical point when the QR code width is not specified. The default value is 2.
         * @param {LPA_P417EncodeMode|undefined} options.encodeMode QR code encoding mode, value reference {@link LPA_P417EncodeMode},
         *          The default is {@link LPA_P417EncodeMode.Auto}. If the encoded content requires a higher level encoding mode, the program will automatically upgrade the mode.
         * @param {LPA_P417EccLevel|undefined} options.eccLevel QR code error correction mode, the value refers to {@link LPA_P417EccLevel}, the default is {@link LPA_P417EccLevel.Auto}.
         * @param {0|90|180|270|undefined} options.orientation The rotation angle, 0, 90, 180, 270.
         *          If not specified, it means using the parameter set by {@link setItemOrientation()}. The default value is 0, which means no rotation.
         * @param {LPA_ItemAlignment|undefined} options.horizontalAlignment horizontal alignment. Not specifying means using the parameter set by {@link setItemHorizontalAlignment()}.
         *          The default value is {@link LPA_ItemAlignment.Start}, which means left alignment.
         * @param {LPA_ItemAlignment|undefined} options.verticalAlignment vertical alignment. Not specifying means using the parameter set by {@link setItemVerticalAlignment()}.
         *          The default value is: {@link LPA_ItemAlignment.Start}, which means top alignment.
         */
        async draw2DPdf417(options) {
            options = utils.getRequestData(['text'], [options]);
            if (!options.text)
                return false;
            //
            options = utils.unitConvertOfDrawBase(options, this._margins);
            //
            const resp = await this.requestApi(ACTIONS.Draw2DPdf417, options);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Print DataMatrix codes.
         *
         * @param {DrawDataMatrixOptions} options DataMatrix QR code drawing options.
         *
         * @param {string} options.text The QR code data to be drawn.
         * @param {number|undefined} options.x The horizontal coordinate position of the drawn object, in millimeters.
         * @param {number|undefined} options.y The vertical coordinate position of the drawn object, in millimeters.
         * @param {number|undefined} options.width The display width of the drawing object, in millimeters
         *          The default value is 0, which means that the QR code size is automatically calculated based on the point size set by {@link dmtxPixels}.
         * @param {number|undefined} options.height The display height of the drawn object. If not specified, it will be displayed according to: {@link width}, in millimeters.
         * @param {LPA_DMTextEncoding|undefined} options.textEncoding string encoding method, the value refers to {@link LPA_DMTextEncoding}, the default is {@link LPA_QRTextEncoding.UTF8}.
         * @param {number|undefined} options.dmtxPixels indicates the number of pixels per logical point of the QR code when the display width of the QR code is not specified. The default value is 2 pixels.
         * @param {number|number} options.symbolShape
         * @param {LPA_DMEncodeMode|undefined} options.encodeMode QR code encoding mode, the value refers to {@link LPA_DMEncodeMode}, the default is {@link LPA_QREncodeMode.ModeNum}.
         *          If the encoded content requires a higher level encoding mode, the program will automatically upgrade the mode.
         * @param {number|undefined} options.encodeFlags
         * @param {number|undefined} options.minHeight The minimum height of the QR code, in millimeters. Adaptive by default.
         * @param {number|undefined} options.maxHeight Maximum height of the QR code, in millimeters. Adaptive by default.
         * @param {0|90|180|270|undefined} options.orientation The rotation angle, 0, 90, 180, 270.
         *          If not specified, it means using the parameter set by {@link setItemOrientation()}. The default value is 0, which means no rotation.
         * @param {LPA_ItemAlignment|undefined} options.horizontalAlignment horizontal alignment. Not specifying means using the parameter set by {@link setItemHorizontalAlignment()}.
         *          The default value is {@link LPA_ItemAlignment.Start}, which means left alignment.
         * @param {LPA_ItemAlignment|undefined} options.verticalAlignment vertical alignment. Not specifying means using the parameter set by {@link setItemVerticalAlignment()}.
         *          The default value is: {@link LPA_ItemAlignment.Start}, which means top alignment.
         * @returns success or failure.
         */
        async draw2DDataMatrix(options) {
            options = utils.getRequestData(['text'], [options]);
            if (!options.text)
                return false;
            //
            options = utils.unitConvertOfDrawBase(options, this._margins);
            //
            const resp = await this.requestApi(ACTIONS.Draw2DDataMatrix, options);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Draw a rectangular box.
         *
         * @param {DrawRectOptions} options Rectangle drawing related options.
         *
         * @param {number|undefined} options.x The horizontal position of the rectangle, in millimeters, the default value is 0.
         * @param {number|undefined} options.y The vertical position of the rectangle, in millimeters, the default value is 0.
         * @param {number|undefined} options.width The horizontal width of the rectangle, in millimeters, defaults to {@link CONSTANTS.RECT_WIDTH}.
         * @param {number|undefined} options.height The vertical height of the rectangle, in millimeters, the default value is the same as the width.
         * @param {number|undefined} options.cornerWidth The corner width of the rectangle, in millimeters, the default value is 0.
         * @param {number|undefined} options.cornerHeight The corner height of the rectangle, in millimeters, the default value is 0.
         * @param {number|undefined} options.lineWidth The line width of the rounded rectangle, in millimeters, the default value is {@link CONSTANTS.LINE_WIDTH}.
         * @param {boolean|undefined} options.fill Whether to draw a filled rounded rectangle. The default value is false, indicating that a rectangular border is displayed.
         * @param {0|90|180|270|undefined} options.orientation The rotation angle, 0, 90, 180, 270.
         *          If not specified, it means using the parameter set by {@link setItemOrientation()}. The default value is 0, which means no rotation.
         */
        async drawRectangle(options) {
            options = utils.getRequestData([], [options]);
            if (options.fill) {
                return this.fillRectangle(options);
            }
            if (options.cornerWidth || options.cornerHeight) {
                return this.drawRoundRectangle(options);
            }
            //
            options.lineWidth = this.getLineWidth(options.lineWidth);
            options = utils.unitConvertOfDrawRect(options, this._margins);
            //
            const resp = await this.requestApi(ACTIONS.DrawRectangle, options);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Draw a filled rectangle.
         *
         * @param {FillRectOptions} options Fill rectangle drawing related options.
         *
         * @param {number|undefined} options.x The horizontal position of the rectangle, in millimeters, the default value is 0
         * @param {number|undefined} options.y The vertical position of the rectangle, in millimeters, the default value is 0
         * @param {number|undefined} options.width The horizontal width of the rectangle, in millimeters, the default value is {@link CONSTANTS.RECT_WIDTH}.
         * @param {number|undefined} options.height The vertical height of the rectangle, in millimeters, the default value is the same as the width.
         * @param {number|undefined} options.cornerWidth The corner width of the rectangle, in millimeters, the default value is 0.
         * @param {number|undefined} options.cornerHeight The corner height of the rectangle, in millimeters, the default value is 0.
         * @param {0|90|180|270|undefined} options.orientation The rotation angle, 0, 90, 180, 270.
         *          If not specified, it means using the parameter set by {@link setItemOrientation()}. The default value is 0, which means no rotation.
         */
        async fillRectangle(options) {
            options = utils.getRequestData([], [options]);
            if (options.cornerWidth || options.cornerHeight)
                return this.fillRoundRectangle(options);
            //
            options = utils.unitConvertOfFillRect(options, this._margins);
            //
            const resp = await this.requestApi(ACTIONS.FillRectangle, options);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Draw a rounded rectangle.
         *
         * @param {DrawRectOptions} options for drawing a rounded rectangle.
         *
         * @param {number|undefined} options.x The horizontal position of the rounded rectangle, in millimeters, the default value is 0
         * @param {number|undefined} options.y The vertical position of the rounded rectangle, in millimeters, the default value is 0
         * @param {number|undefined} options.width The horizontal width of the rounded rectangle, in millimeters, the default value is {@link CONSTANTS.RECT_WIDTH}.
         * @param {number|undefined} options.height The vertical height of the rounded rectangle, in millimeters, the default value is the same as the width.
         * @param {number|undefined} options.cornerWidth Corner width, in millimeters, the default value is 0.
         * @param {number|undefined} options.cornerHeight Corner height, in millimeters, the default value is 0.
         * @param {number|undefined} options.lineWidth The line width of the rounded rectangle, in millimeters, the default value is {@link CONSTANTS.LINE_WIDTH}.
         * @param {boolean|undefined} options.fill Whether to draw a filled rounded rectangle, the default is false, which means drawing a rounded rectangle.
         * @param {0|90|180|270|undefined} options.orientation The rotation angle, 0, 90, 180, 270.
         *          If not specified, it means using the parameter set by {@link setItemOrientation()}. The default value is 0, which means no rotation.
         */
        async drawRoundRectangle(options) {
            options = utils.getRequestData([], [options]);
            if (options.fill) {
                return this.fillRoundRectangle(options);
            }
            //
            options.cornerWidth = this.getCornerWidth(options.cornerWidth || options.cornerHeight);
            options.lineWidth = this.getLineWidth(options.lineWidth);
            options = utils.unitConvertOfDrawRect(options, this._margins);
            //
            const resp = await this.requestApi(ACTIONS.DrawRoundRectangle, options);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Draw a filled rounded rectangle.
         *
         * @param {FillRectOptions} Fill rounded rectangle related options.
         *
         * @param {number|undefined} options.x The horizontal position of the rounded rectangle, in millimeters, the default value is 0
         * @param {number|undefined} options.y The vertical position of the rounded rectangle, in millimeters, the default value is 0
         * @param {number|undefined} options.width The horizontal width of the rounded rectangle, in millimeters, the default value is {@link CONSTANTS.RECT_WIDTH}.
         * @param {number|undefined} options.height The vertical height of the rounded rectangle, in millimeters, the default value is the same as the width.
         * @param {number|undefined} options.cornerWidth Corner width, in millimeters, default value is {@link CONSTANTS.CORNER_RADIUS}.
         * @param {number|undefined} options.cornerHeight Corner height, in millimeters, default value is {@link cornerWidth}.
         * @param {0|90|180|270|undefined} options.orientation The rotation angle, 0, 90, 180, 270.
         *          If not specified, it means using the parameter set by {@link setItemOrientation()}. The default value is 0, which means no rotation.
         */
        async fillRoundRectangle(options) {
            options = utils.getRequestData([], [options]);
            options.cornerWidth = this.getCornerWidth(options.cornerWidth || options.cornerHeight);
            options = utils.unitConvertOfFillRect(options, this._margins);
            //
            const resp = await this.requestApi(ACTIONS.FillRoundRectangle, options);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Draw the border of an ellipse.
         *
         * @param {DrawRectOptions} ellipse drawing related options.
         *
         The horizontal position of the ellipse, in millimeters, the default value is 0.
         * @param {number|undefined} options.y The vertical position of the ellipse, in millimeters, the default value is 0.
         * @param {number|undefined} options.width The horizontal width of the ellipse, in millimeters, the default value is {@link CONSTANTS.RECT_WIDTH}.
         * @param {number|undefined} options.height The vertical height of the ellipse, in millimeters, the default value is the same as the width.
         * @param {number|undefined} options.lineWidth The line width of the ellipse, in millimeters, the default value is {@link CONSTANTS.LINE_WIDTH}.
         * @param {boolean|undefined} options.fill Whether to draw a filled ellipse. The default value is false, which means drawing an ellipse border.
         * @param {0|90|180|270|undefined} options.orientation The rotation angle, 0, 90, 180, 270.
         *          If not specified, it means using the parameter set by {@link setItemOrientation()}. The default value is 0, which means no rotation.
         */
        async drawEllipse(options) {
            options = utils.getRequestData([], [options]);
            if (options.fill)
                return this.fillEllipse(options);
            //
            options.lineWidth = this.getLineWidth(options.lineWidth);
            options = utils.unitConvertOfDrawRect(options, this._margins);
            //
            const resp = await this.requestApi(ACTIONS.DrawEllipse, options);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Draw a filled ellipse.
         *
         * @param {FillRectOptions} Fill ellipse drawing related options.
         *
         The horizontal position of the ellipse, in millimeters, the default value is 0.
         * @param {number|undefined} options.y The vertical position of the ellipse, in millimeters, the default value is 0.
         * @param {number|undefined} options.width The horizontal width of the ellipse, in millimeters, the default value is {@link CONSTANTS.RECT_WIDTH}.
         * @param {number|undefined} options.height The vertical height of the ellipse, in millimeters, the default value is the same as the width.
         * @param {0|90|180|270|undefined} options.orientation The rotation angle, 0, 90, 180, 270.
         *          If not specified, it means using the parameter set by {@link setItemOrientation()}. The default value is 0, which means no rotation.
         */
        async fillEllipse(options) {
            options = utils.getRequestData([], [options]);
            options = utils.unitConvertOfFillRect(options, this._margins);
            //
            const resp = await this.requestApi(ACTIONS.FillEllipse, options);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Draw a circle.
         *
         * @param {DrawCircleOptions} options Parameters related to circle drawing.
         *
         * @param {number|undefined} options.x The horizontal coordinate position of the circle center, in millimeters, the default value is 0.
         * @param {number|undefined} options.y The vertical coordinate position of the circle center, in millimeters, the default value is 0.
         * @param {number|undefined} options.radius The radius of the circle, in millimeters, the default value is {@link CONSTANTS.RADIUS}.
         * @param {number|undefined} options.lineWidth The circular border width, in millimeters, and the default value is {@link CONSTANTS.LINE_WIDTH}.
         * @param {boolean|undefined} options.fill Whether to draw a filled circle. The default value is false, which means only drawing the circular border.
         */
        async drawCircle(options) {
            options = utils.getRequestData([], [options]);
            if (options.fill)
                this.fillCircle(options);
            //
            const radius = this.getRadius(options.radius);
            const width = radius * 2;
            delete options.radius;
            //
            const opts = options;
            opts.x = (options.x || 0) - radius;
            opts.y = (options.y || 0) - radius;
            opts.width = opts.height = width;
            //
            return this.drawEllipse(opts);
        }
        /**
         *
         * Draws a filled circle.
         *
         * @param {FillCircleOptions} options Filled circle drawing related parameters.
         *
         * @param {number|undefined} options.x The horizontal coordinate position of the circle center, in millimeters, the default value is 0.
         * @param {number|undefined} options.y The vertical coordinate position of the circle center, in millimeters, the default value is 0.
         * @param {number|undefined} options.radius The radius of the circle, in millimeters, the default value is {@link CONSTANTS.RADIUS}.
         */
        async fillCircle(options) {
            options = utils.getRequestData(['radius'], [options]);
            const radius = this.getRadius(options.radius);
            const width = radius * 2;
            const opts = options;
            opts.x = (options.x || 0) - radius;
            opts.y = (options.y || 0) - radius;
            opts.width = opts.height = width;
            //
            delete options.radius;
            //
            return this.fillEllipse(opts);
        }
        /**
         * Draw a straight line.
         *
         * @param {DrawLineOptions} options Line drawing related options.
         *
         * @param {number|undefined} options.x1 The starting point of the dash-dot line, in millimeters, the default value is 0.
         * @param {number|undefined} options.y1 The starting point of the dash-dot line, in millimeters, the default value is 0.
         * @param {number|undefined} options.x2 The end point of the dash-dot line, in millimeters, and the default value is equal to x1.
         * @param {number|undefined} options.y2 The end point of the dash-dot line, in millimeters, and the default value is equal to y1.
         * @param {number|undefined} options.lineWidth lineWidth: straight line width, in millimeters, the default value is {@link CONSTANTS.lineWidth}.
         * @param {number[]|undefined} options.dashLens An array of dashline segment lengths.
         * @param {0|90|180|270|undefined} options.orientation The rotation angle, 0, 90, 180, 270.
         *          If not specified, it means using the parameter set by {@link setItemOrientation()}. The default value is 0, which means no rotation.
         */
        async drawLine(options) {
            options = utils.getRequestData([], [options]);
            if ((options.dashLens || options.dashLen || []).length > 0) {
                return this.drawDashLine(options);
            }
            //
            options.lineWidth = this.getLineWidth(options.lineWidth);
            options = utils.unitConvertOfLine(options, this._margins);
            const resp = await this.requestApi(ACTIONS.DrawLine, options);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Prints a dash-dot line.
         *
         * @param {DrawDashLineOptions} options Options related to dot-dash line drawing.
         *
         * @param {number|undefined} options.x1 The starting point of the dash-dot line, in millimeters, the default value is 0.
         * @param {number|undefined} options.y1 The starting point of the dash-dot line, in millimeters, the default value is 0.
         * @param {number|undefined} options.x2 The end point of the dash-dot line, in millimeters, the default value is x1.
         * @param {number|undefined} options.y2 The end point of the dash-dot line, in millimeters, the default value is y1.
         * @param {number|undefined} options.lineWidth lineWidth: Line width, in millimeters, default value is {@link CONSTANTS.LINE_WIDTH}. Line width extends downwards.
         * @param {number[]} options.dashLen An array of dashed line segment lengths, defaults to {@link CONSTANTS.DASH_LEN}.
         * @param {0|90|180|270|undefined} options.orientation The rotation angle, 0, 90, 180, 270.
         *          If not specified, it means using the parameter set by {@link setItemOrientation()}. The default value is 0, which means no rotation.
         *
         * @infor       If LPAStartPage is not called before and printing is performed directly, the print function will automatically call LPAStartPage(0) to start printing a page and then print.
         * @infor       The print position and width and height are based on the position and orientation of the current page, without considering the rotation angle of the page and the printing action.
         */
        async drawDashLine(options) {
            options = utils.getRequestData([], [options]);
            if ((options.dashLen || options.dashLens || []).length < 1) {
                options.dashLens = CONSTANTS.DASH_LEN;
            }
            options.lineWidth = this.getLineWidth(options.lineWidth);
            options = utils.unitConvertOfLine(options, this._margins);
            //
            const resp = await this.requestApi(ACTIONS.DrawDashLine, options);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         *  Print the specified URL image.
         *
         * @param {DrawImageUrlOptions} options URL image drawing related options.
         *
         * @param {string} options.imageFile Image file or URL path.
         * @param {number|undefined} options.x The horizontal coordinate position of the drawing object, in millimeters, the default value is 0.
         * @param {number|undefined} options.y The vertical coordinate position of the drawing object, in millimeters, the default value is 0.
         * @param {number|undefined} options.width The display width of the drawing object, in millimeters. The default value is 0, indicating the actual size of the image.
         * @param {number|undefined} options.height The display height of the drawing object, in millimeters. The default value is 0, indicating the actual size of the image.
         * @param {number|undefined} options.threshold Grayscale threshold for black and white printing of images.
         *          0 means using the value in the parameter setting;
         *          256 means cancel black and white printing and print in grayscale;
         *          257 means printing the original color of the image directly.
         * @param {0|90|180|270|undefined} options.orientation The rotation angle, 0, 90, 180, 270.
         *          If not specified, it means using the parameter set by {@link setItemOrientation()}. The default value is 0, which means no rotation.
         *
         * @info        If you print directly without calling StartPage before, the print function will automatically call StartPage to start printing a page and then print.
         * @info        The print position and width and height are based on the position and orientation of the current page, without considering the rotation angle of the page and the printing action.
         * @info        The image will be scaled to the specified width and height when printed.
         * @info        Labels are printed in black and white, so the bitmap will be converted into a grayscale image (the three components of RGB are the same, with values ​​ranging from 0 to 255), and then converted back to a black and white bitmap based on a threshold before printing.
         *              The default grayscale threshold is 192, which means that >= 192 is considered white, and < 192 is considered black.
         */
        async drawImage(options) {
            options = utils.getRequestData([], [options]);
            if (!options.imageFile)
                return false;
            //
            options = utils.unitConvertOfDrawBase(options, this._margins);
            //
            const resp = await this.requestApi(ACTIONS.DrawImage, options);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Draw the picture object.
         *
         * @param {DrawImageDataOptions} options Image object drawing options.
         *
         * @param {any} options.data Image data, usually a base64 string of the image.
         * @param {number|undefined} options.x The horizontal coordinate position of the drawing object, in millimeters, the default value is 0.
         * @param {number|undefined} options.y The vertical coordinate position of the drawing object, in millimeters, the default value is 0.
         * @param {number|undefined} options.drawWidth The image display width, in millimeters. The default value is 0, indicating the actual width of the image.
         * @param {number|undefined} options.drawHeight The image display height, in millimeters, the default value is 0, indicating the actual height of the image.
         * @param {number|undefined} options.threshold The grayscale threshold for black and white conversion of the image. The default value is {@link CONSTANTS.THRESHOLD}.
         *          0 means using the value in the parameter setting;
         *          256 means cancel black and white printing and print in grayscale;
         *          257 means printing the original color of the image directly.
         * @param {LPA_SourceImageFormat|undefined} options.format The target image data format, the default is {@link LPA_SourceImageFormat.LPASIF_IMAGEDATA}, indicating a BASE64 image.
         * @param {number|undefined} options.imageWidth The actual width of the image in data, in pixels.
         * @param {number|undefined} options.lineSize The number of bytes of each line of bitmap data. The default is zero.
         *          If lineSize is specified, it must be >= the default length; if zero, the default length is assumed as follows:
         *
         *          LPASIF_BPP_1   : (width + 7) / 8
         *          LPASIF_BPP_1N  : (width + 7) / 8
         *          LPASIF_32_RGBA : width * 4
         *          LPASIF_32_BGRA : width * 4
         *          LPASIF_32_RGB  : width * 4
         *          LPASIF_32_BGR  : width * 4
         *          LPASIF_PACKAGE : The message format does not use the lineSize parameter.
         * @param {0|90|180|270|undefined} options.orientation The rotation angle, 0, 90, 180, 270.
         *          If not specified, it means using the parameter set by {@link setItemOrientation()}. The default value is 0, which means no rotation.
         */
        async drawImageD(options) {
            var _a;
            options = utils.getRequestData([], [options]);
            if (!options.data)
                return false;
            //
            options.threshold = (_a = options.threshold) !== null && _a !== void 0 ? _a : CONSTANTS.THRESHOLD;
            //
            options = utils.unitConvertOfDrawBase(options, this._margins);
            options.drawWidth = utils.unitConvert(options.drawWidth || this._labelWidth);
            options.drawHeight = utils.unitConvert(options.drawHeight || this._labelHeight);
            //
            const resp = await this.requestApi({
                action: ACTIONS.DrawImageD,
                contentType: LPA_ContentType.Base64,
                data: options.data,
            }, options);
            return (resp === null || resp === void 0 ? void 0 : resp.statusCode) === LPA_Result.OK;
        }
        /**
         * Print the specified bitmap object directly.
         *
         * @param {PrintImageOptions} options Image printing related options.
         *
         * @param {string} options.data Print data, usually image data in BASE64 format.
         * @param {string|undefined} options.printerName The printer name. If not specified, it means the last connected printer.
         * @param {LPA_SourceImageFormat|undefined} options.format Image format, default is {@link LPA_SourceImageFormat.LPASIF_IMAGEDATA},
         *          Only this format is supported at this stage.
         * @param {number|undefined} options.imageWidth If the print data is transferred as a binary stream, you need to specify the width of the corresponding image in pixels.
         * @param {number|undefined} options.lineSize The size of a single line of data in a binary stream.
         * @param {number|undefined} options.printWidth The width of the image printing area, in millimeters. The default value is 0, which means printing according to the actual size.
         * @param {number|undefined} options.printHeight The height of the image printing area, in millimeters. The default value is 0, which means printing according to the actual size.
         * @param {number|undefined} options.threshold The threshold for converting images to black and white. The default value is {@link CONSTANTS.THRESHOLD}.
         * @param {number|undefined} options.orientation The image printing direction. The default value is 0, which means that the image will not be rotated before printing.
         * @param {number|undefined} options.copies The number of copies to print. By default, only 1 copy is printed.
         * @param {string|undefined} options.jobName Printing task name.
         */
        async printImage(options) {
            var _a;
            options = utils.getRequestData(['data'], [options]);
            if (!options.data)
                return false;
            //
            options.scaleUnit = 1;
            options.printWidth = utils.unitConvert(options.printWidth);
            options.printHeight = utils.unitConvert(options.printHeight);
            options.threshold = (_a = options.threshold) !== null && _a !== void 0 ? _a : CONSTANTS.THRESHOLD;
            options.jobName = options.jobName || exports.LPA_JobNames.Print;
            //
            const resp = await this.requestApi({
                action: ACTIONS.PrintImageD,
                contentType: LPA_ContentType.Base64,
                data: options.data,
            }, options);
            return resp ? resp.statusCode === LPA_Result.OK : false;
        }
        /**
         * Directly print the control command data supported by the printer, which can be print data or parameter setting commands, etc.
         *
         * @param options command print related options.
         *
         * @param {string|undefined} options.printerName The printer name. If not specified, it means the last connected printer.
         * @param {number|undefined} options.copies The number of copies to print. By default, only 1 copy is printed.
         * @param {string|undefined} options.jobName Printing task name.
         */
        async printRawData(options) {
            options = utils.getRequestData(['data'], [options]);
            if (!options.data)
                return false;
            //
            const resp = await this.requestApi(ACTIONS.PrintRawData, options);
            return resp ? resp.statusCode === LPA_Result.OK : false;
        }
        /**
         * Directly print image data in LPASIF_PACKAGE format.
         *
         * @param options LPASIF_PACKAGE format image printing related options.
         *
         * @param {string|undefined} options.printerName The printer name. If not specified, it means the last connected printer.
         * @param {number|undefined} options.width The horizontal width of the printed bitmap, in pixels.
         * @param {number|undefined} options.copies The number of copies to print. By default, only 1 copy is printed.
         * @param {string|undefined} options.jobName Printing task name.
         */
        async printPackage(options) {
            options = utils.getRequestData(['data'], [options]);
            if (!options.data)
                return false;
            //
            const resp = await this.requestApi(ACTIONS.PrintPackage, options);
            return resp ? resp.statusCode === LPA_Result.OK : false;
        }
        /**
         * Print the entire print task according to the given label configuration information.
         *
         * @param {PrintJobOptions} options Printing configuration information.
         *
         * @returns Whether printing is successful or not
         */
        async print(options) {
            if (!options || !options.jobPages)
                return undefined;
            //
            const actionParam = options.action || CONSTANTS.PRINT_ACTION;
            if (options.action)
                delete options.action;
            //
            const resp = await this.requestApi({
                action: ACTIONS.Print,
                contentType: LPA_ContentType.Json,
                params: {
                    action: actionParam,
                },
                data: options,
            });
            return resp && resp.statusCode === LPA_Result.OK ? resp.resultInfo : undefined;
        }
    }

    exports.DTPWeb = DTPWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
