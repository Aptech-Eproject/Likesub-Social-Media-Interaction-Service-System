(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/alert.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "confirmAction",
    ()=>confirmAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
;
;
var confirmAction = function(options) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Đồng ý",
        cancelButtonText: "Hủy bỏ",
        reverseButtons: true,
        // Custom styling
        customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            htmlContainer: 'custom-swal-text',
            confirmButton: 'custom-swal-confirm',
            cancelButton: 'custom-swal-cancel',
            icon: 'custom-swal-icon'
        },
        // Button styling
        buttonsStyling: false,
        // Animation
        showClass: {
            popup: 'animate__animated animate__fadeInDown animate__faster'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp animate__faster'
        }
    }, options));
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/layouts/admin/AdminSubHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
var capitalizeFirst = function(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
};
function AdminSubHeader(param) {
    var titlePage = param.titlePage, prevTitle = param.prevTitle, urlPrevTitle = param.urlPrevTitle;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white shadow-sm flex items-center justify-between z-50 px-6 py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-bold text-slate-700 uppercase",
                children: titlePage
            }, void 0, false, {
                fileName: "[project]/src/layouts/admin/AdminSubHeader.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/admin/dashboard",
                        className: "hover:underline text-sm font-medium",
                        children: "Trang chủ"
                    }, void 0, false, {
                        fileName: "[project]/src/layouts/admin/AdminSubHeader.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                        className: "w-3.5 h-3.5 text-gray-500"
                    }, void 0, false, {
                        fileName: "[project]/src/layouts/admin/AdminSubHeader.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this),
                    prevTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "".concat(urlPrevTitle),
                                className: "hover:underline text-sm font-medium",
                                children: capitalizeFirst(prevTitle)
                            }, void 0, false, {
                                fileName: "[project]/src/layouts/admin/AdminSubHeader.tsx",
                                lineNumber: 35,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                                className: "w-3.5 h-3.5 text-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/src/layouts/admin/AdminSubHeader.tsx",
                                lineNumber: 41,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "first-letter:uppercase text-sm text-gray-500 font-medium",
                        children: capitalizeFirst(titlePage)
                    }, void 0, false, {
                        fileName: "[project]/src/layouts/admin/AdminSubHeader.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/layouts/admin/AdminSubHeader.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/layouts/admin/AdminSubHeader.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_c = AdminSubHeader;
const __TURBOPACK__default__export__ = AdminSubHeader;
var _c;
__turbopack_context__.k.register(_c, "AdminSubHeader");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/services/parents/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$alert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/alert.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grip-vertical.js [app-client] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$1$2d$0$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp10$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-1-0.js [app-client] (ecmascript) <export default as ArrowUp10>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleQuestionMark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as CircleQuestionMark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-up.js [app-client] (ecmascript) <export default as ChevronsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SquarePen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as SquarePen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.js [app-client] (ecmascript) <export default as Trash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$admin$2f$AdminSubHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layouts/admin/AdminSubHeader.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
var ServiceIcons = {
    facebook: function() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm animate-pulse",
            children: "f"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/services/parents/page.tsx",
            lineNumber: 43,
            columnNumber: 9
        }, _this);
    },
    tiktok: function() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 bg-black rounded flex items-center justify-center animate-pulse",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 text-white",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, _this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/services/parents/page.tsx",
            lineNumber: 46,
            columnNumber: 9
        }, _this);
    },
    youtube: function() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 bg-red-600 rounded flex items-center justify-center animate-pulse",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 text-white",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, _this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/services/parents/page.tsx",
            lineNumber: 53,
            columnNumber: 9
        }, _this);
    },
    instagram: function() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded flex items-center justify-center animate-pulse",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 text-white",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, _this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/services/parents/page.tsx",
            lineNumber: 60,
            columnNumber: 9
        }, _this);
    },
    telegram: function() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 bg-blue-400 rounded flex items-center justify-center animate-pulse",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 text-white",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                    lineNumber: 69,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, _this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/services/parents/page.tsx",
            lineNumber: 67,
            columnNumber: 9
        }, _this);
    },
    twitter: function() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 bg-black rounded flex items-center justify-center animate-pulse",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 text-white",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                    lineNumber: 76,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                lineNumber: 75,
                columnNumber: 13
            }, _this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/services/parents/page.tsx",
            lineNumber: 74,
            columnNumber: 9
        }, _this);
    },
    threads: function() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 bg-black rounded flex items-center justify-center animate-pulse",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 text-white",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142l-.126 1.974a11.9 11.9 0 0 0-2.618-.123c-1.114.061-2.022.382-2.624.925-.557.502-.84 1.171-.796 1.885.037.607.368 1.11.931 1.415.513.279 1.178.397 1.873.33 1.158-.088 2.052-.537 2.663-1.335.49-.64.786-1.541.882-2.684l.011-.11v-.019c-.006-.885-.113-1.645-.337-2.267-.288-.798-.768-1.463-1.429-1.977-.68-.528-1.557-.834-2.607-.911-1.516-.111-2.835.208-3.927.948-1.271.86-1.976 2.168-1.976 3.682 0 .949.251 1.82.746 2.593.473.738 1.146 1.345 2.003 1.806 1.725.927 4.01 1.178 6.76.738l.294 1.96c-3.124.468-5.69.165-7.625-.9-1.05-.577-1.917-1.369-2.578-2.356-.69-1.033-1.04-2.2-1.04-3.471 0-2.024.912-3.789 2.566-4.972 1.381-.988 3.087-1.43 5.07-1.314 1.402.082 2.586.505 3.52 1.258.925.746 1.593 1.77 1.986 3.045.267.867.405 1.855.41 2.934v.02c0 .07-.004.14-.012.21l.002.02c.002.166.004.333.005.5 0 .97-.145 1.77-.434 2.38-.255.542-.623.98-1.096 1.307-.473.327-1.03.49-1.658.49z"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                    lineNumber: 83,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, _this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/services/parents/page.tsx",
            lineNumber: 81,
            columnNumber: 9
        }, _this);
    },
    google: function() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center animate-pulse",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "#4285F4",
                        d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/services/parents/page.tsx",
                        lineNumber: 90,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "#34A853",
                        d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/services/parents/page.tsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "#FBBC05",
                        d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/services/parents/page.tsx",
                        lineNumber: 92,
                        columnNumber: 17
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "#EA4335",
                        d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/services/parents/page.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                lineNumber: 89,
                columnNumber: 13
            }, _this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/services/parents/page.tsx",
            lineNumber: 88,
            columnNumber: 9
        }, _this);
    },
    shopee: function() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 bg-orange-500 rounded flex items-center justify-center animate-pulse",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-5 h-5 text-white",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18.5 8.5c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm-4 5.5c-3.31 0-6 2.69-6 6v2h12v-2c0-3.31-2.69-6-6-6z"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                    lineNumber: 100,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                lineNumber: 99,
                columnNumber: 13
            }, _this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/services/parents/page.tsx",
            lineNumber: 98,
            columnNumber: 9
        }, _this);
    },
    lazada: function() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 bg-blue-700 rounded flex items-center justify-center text-white font-bold text-sm animate-pulse",
            children: "Laz"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/services/parents/page.tsx",
            lineNumber: 105,
            columnNumber: 9
        }, _this);
    }
};
var ParentServices = function() {
    _s();
    var titlePage = "quản lý chuyên mục cha";
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), expandedServices = _useState[0], setExpandedServices = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), activeTab = _useState1[0], setActiveTab = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isShowCreateCategoryModal = _useState2[0], setIsShowCreateCategoryModal = _useState2[1];
    var services = [
        {
            id: 1,
            name: 'Dịch vụ Facebook',
            icon: 'facebook',
            packages: 45,
            tasks: 14,
            enabled: true,
            subServices: [
                {
                    id: 1,
                    name: 'Facebook | Like bài viết (Lên nhanh)',
                    services: 12,
                    enabled: true
                },
                {
                    id: 2,
                    name: 'Facebook | Comment Likes | Tăng likes bình luận',
                    services: 1,
                    enabled: true
                },
                {
                    id: 3,
                    name: 'Facebook | Live stream | Tăng mắt Live Stream',
                    services: 11,
                    enabled: true
                },
                {
                    id: 4,
                    name: 'Facebook | Tăng theo dõi (Profile)',
                    services: 10,
                    enabled: true
                },
                {
                    id: 5,
                    name: 'Facebook | Tăng Like Page / Follow Page',
                    services: 11,
                    enabled: true
                },
                {
                    id: 6,
                    name: 'Facebook | Tăng Share bài viết',
                    services: 7,
                    enabled: true
                },
                {
                    id: 7,
                    name: 'Facebook | Tăng Mem Group',
                    services: 7,
                    enabled: true
                },
                {
                    id: 8,
                    name: 'Facebook | Tăng View Video / Reel',
                    services: 11,
                    enabled: true
                },
                {
                    id: 9,
                    name: 'Facebook | View Story',
                    services: 1,
                    enabled: true
                },
                {
                    id: 10,
                    name: 'Facebook | Đánh giá Fanpage 5 sao',
                    services: 5,
                    enabled: true
                },
                {
                    id: 11,
                    name: 'Facebook | Vip Like theo tháng',
                    services: 8,
                    enabled: true
                },
                {
                    id: 12,
                    name: 'Facebook | Checkpoint / Mở khóa tài khoản',
                    services: 3,
                    enabled: true
                }
            ]
        },
        {
            id: 2,
            name: 'Dịch vụ TikTok',
            icon: 'tiktok',
            packages: 24,
            tasks: 8,
            enabled: true,
            subServices: [
                {
                    id: 13,
                    name: 'TikTok | Tăng Follower (Bao tụt)',
                    services: 6,
                    enabled: true
                },
                {
                    id: 14,
                    name: 'TikTok | Tăng Tim (Like) bài viết',
                    services: 8,
                    enabled: true
                },
                {
                    id: 15,
                    name: 'TikTok | Tăng View Video (Cực nhanh)',
                    services: 4,
                    enabled: true
                },
                {
                    id: 16,
                    name: 'TikTok | Tăng Comment nội dung tùy chỉnh',
                    services: 3,
                    enabled: true
                },
                {
                    id: 17,
                    name: 'TikTok | Tăng Share bài viết',
                    services: 2,
                    enabled: true
                },
                {
                    id: 18,
                    name: 'TikTok | Tăng Mắt Livestream',
                    services: 5,
                    enabled: true
                },
                {
                    id: 19,
                    name: 'TikTok | Tăng Save (Lưu bài viết)',
                    services: 2,
                    enabled: true
                }
            ]
        },
        {
            id: 3,
            name: 'Dịch vụ Youtube',
            icon: 'youtube',
            packages: 56,
            tasks: 7,
            enabled: true,
            subServices: [
                {
                    id: 20,
                    name: 'Youtube | Tăng Subscribe (Đăng ký channel)',
                    services: 15,
                    enabled: true
                },
                {
                    id: 21,
                    name: 'Youtube | Tăng View (Video thường)',
                    services: 20,
                    enabled: true
                },
                {
                    id: 22,
                    name: 'Youtube | Tăng View Shorts',
                    services: 10,
                    enabled: true
                },
                {
                    id: 23,
                    name: 'Youtube | Tăng Like Video',
                    services: 5,
                    enabled: true
                },
                {
                    id: 24,
                    name: 'Youtube | Tăng Giờ xem (4000h kiếm tiền)',
                    services: 3,
                    enabled: true
                },
                {
                    id: 25,
                    name: 'Youtube | Tăng Mắt Livestream',
                    services: 3,
                    enabled: true
                }
            ]
        },
        {
            id: 4,
            name: 'Dịch vụ Instagram',
            icon: 'instagram',
            packages: 15,
            tasks: 6,
            enabled: true,
            subServices: [
                {
                    id: 26,
                    name: 'Instagram | Tăng Follower (Global/Việt)',
                    services: 5,
                    enabled: true
                },
                {
                    id: 27,
                    name: 'Instagram | Tăng Like bài viết',
                    services: 4,
                    enabled: true
                },
                {
                    id: 28,
                    name: 'Instagram | Tăng View Video / Reels',
                    services: 3,
                    enabled: true
                },
                {
                    id: 29,
                    name: 'Instagram | Tăng Comment',
                    services: 2,
                    enabled: true
                },
                {
                    id: 30,
                    name: 'Instagram | Tăng View Story',
                    services: 1,
                    enabled: true
                }
            ]
        },
        {
            id: 5,
            name: 'Dịch vụ Telegram',
            icon: 'telegram',
            packages: 6,
            tasks: 5,
            enabled: false,
            subServices: [
                {
                    id: 31,
                    name: 'Telegram | Tăng Mem Channel/Group',
                    services: 3,
                    enabled: true
                },
                {
                    id: 32,
                    name: 'Telegram | Tăng View Post (5-10-20 posts)',
                    services: 2,
                    enabled: true
                },
                {
                    id: 33,
                    name: 'Telegram | Tăng Reaction (Cảm xúc biểu tượng)',
                    services: 1,
                    enabled: true
                }
            ]
        },
        {
            id: 6,
            name: 'Dịch vụ Twitter (X)',
            icon: 'twitter',
            packages: 9,
            tasks: 4,
            enabled: false,
            subServices: [
                {
                    id: 34,
                    name: 'Twitter | Tăng Follower',
                    services: 4,
                    enabled: true
                },
                {
                    id: 35,
                    name: 'Twitter | Tăng Like (Favorite)',
                    services: 2,
                    enabled: true
                },
                {
                    id: 36,
                    name: 'Twitter | Tăng Retweet (Chia sẻ)',
                    services: 2,
                    enabled: true
                },
                {
                    id: 37,
                    name: 'Twitter | Tăng View Video',
                    services: 1,
                    enabled: true
                }
            ]
        },
        {
            id: 7,
            name: 'Dịch vụ Threads',
            icon: 'threads',
            packages: 3,
            tasks: 3,
            enabled: true,
            subServices: [
                {
                    id: 38,
                    name: 'Threads | Tăng Follower',
                    services: 1,
                    enabled: true
                },
                {
                    id: 39,
                    name: 'Threads | Tăng Like',
                    services: 1,
                    enabled: true
                },
                {
                    id: 40,
                    name: 'Threads | Tăng Repost / Quotes',
                    services: 1,
                    enabled: true
                }
            ]
        },
        {
            id: 8,
            name: 'Dịch vụ Google',
            icon: 'google',
            packages: 5,
            tasks: 2,
            enabled: false,
            subServices: [
                {
                    id: 41,
                    name: 'Google | Đánh giá Maps (Local SEO)',
                    services: 3,
                    enabled: true
                },
                {
                    id: 42,
                    name: 'Google | Tăng Search (Entity)',
                    services: 2,
                    enabled: true
                }
            ]
        },
        {
            id: 9,
            name: 'Dịch vụ Shopee',
            icon: 'shopee',
            packages: 4,
            tasks: 1,
            enabled: false,
            subServices: [
                {
                    id: 43,
                    name: 'Shopee | Tăng Follower Shop',
                    services: 2,
                    enabled: true
                },
                {
                    id: 44,
                    name: 'Shopee | Tăng Like sản phẩm',
                    services: 2,
                    enabled: true
                }
            ]
        },
        {
            id: 10,
            name: 'Dịch vụ Lazada',
            icon: 'lazada',
            packages: 1,
            tasks: 1,
            enabled: true,
            subServices: [
                {
                    id: 45,
                    name: 'Lazada | Tăng Follower Shop',
                    services: 1,
                    enabled: true
                }
            ]
        }
    ];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(services), 2), servicesData = _useState3[0], setServicesData = _useState3[1];
    var toggleService = function(serviceId) {
        setExpandedServices(function(prev) {
            return prev.includes(serviceId) ? prev.filter(function(id) {
                return id !== serviceId;
            }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(prev).concat([
                serviceId
            ]);
        });
    };
    var openAll = function() {
        var allIds = services.map(function(s) {
            return s.id;
        });
        setExpandedServices(allIds);
        setActiveTab('open');
    };
    var closeAll = function() {
        setExpandedServices([]);
        setActiveTab('all');
    };
    var IconComponent = function(param) {
        var iconName = param.iconName;
        var Icon = ServiceIcons[iconName];
        return Icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
            fileName: "[project]/src/app/admin/services/parents/page.tsx",
            lineNumber: 290,
            columnNumber: 23
        }, _this) : null;
    };
    var handleToggleSubService = function(serviceId, subIdx) {
        setServicesData(function(prevServices) {
            return prevServices.map(function(service) {
                if (service.id === serviceId) {
                    var newSubServices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(service.subServices);
                    newSubServices[subIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, newSubServices[subIdx]), {
                        enabled: !newSubServices[subIdx].enabled
                    });
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, service), {
                        subServices: newSubServices
                    });
                }
                return service;
            });
        });
    };
    var customStyles = {
        container: 'border-radius: 12px; padding: 1.5rem;',
        title: 'font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-bottom: 0.5rem;',
        text: 'font-size: 0.95rem; color: #4b5563; line-height: 1.5;',
        warningBox: 'margin-top: 1rem; padding: 0.75rem; border-radius: 8px; font-size: 0.875rem; display: flex; align-items: start; gap: 8px;'
    };
    var showDeleteParentServiceWarningAlert = function(id) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var result;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$alert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["confirmAction"])({
                                title: '<span style="' + customStyles.title + '">Cảnh báo</span>',
                                html: '\n            <div style="'.concat(customStyles.text, '">\n                Bạn có chắc chắn muốn xóa chuyên mục cha ID ').concat(id, ' này không?\n            </div>\n            <div style="').concat(customStyles.warningBox, ' background-color: #fef2f2; color: #991b1b; border: 1px solid #fee2e2;">\n                <span>⚠️</span>\n                <span>Hành động này mang tính vĩnh viễn và không thể hoàn tác.</span>\n            </div>\n        ')
                            })
                        ];
                    case 1:
                        result = _state.sent();
                        if (result.isConfirmed) console.log("Resetting deposits...");
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var showDeleteChildServiceWarningAlert = function(id) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var result;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$alert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["confirmAction"])({
                                title: '<span style="' + customStyles.title + '">Cảnh báo</span>',
                                html: '\n            <div style="'.concat(customStyles.text, '">\n                Bạn có chắc chắn muốn xóa chuyên mục con ID ').concat(id, ' này không?\n            </div>\n            <div style="').concat(customStyles.warningBox, ' background-color: #fef2f2; color: #991b1b; border: 1px solid #fee2e2;">\n                <span>⚠️</span>\n                <span>Hành động này mang tính vĩnh viễn và không thể hoàn tác.</span>\n            </div>\n        ')
                            })
                        ];
                    case 1:
                        result = _state.sent();
                        if (result.isConfirmed) console.log("Resetting deposits...");
                        return [
                            2
                        ];
                }
            });
        })();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$admin$2f$AdminSubHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                titlePage: titlePage
            }, void 0, false, {
                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                lineNumber: 357,
                columnNumber: 13
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white px-6 py-4 rounded-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center px-2 py-1 rounded-sm border font-medium transition-colors duration-500 cursor-pointer hover:text-white hover:bg-cyan-500\n                                ".concat(activeTab === 'all' ? 'border-cyan-300 text-cyan-500 bg-cyan-50' : 'border-cyan-400 text-cyan-500 bg-white hover:text-white hover:bg-cyan-500'),
                                            onClick: closeAll,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUp$3e$__["ChevronsUp"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 33
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-bold ml-1",
                                                    children: "Đóng tất cả"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                            lineNumber: 366,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center gap-2 px-2 py-1 rounded-sm border text-sm font-medium transition-colors duration-500 cursor-pointer hover:bg-[#846adf] hover:text-white\n                                ".concat(activeTab === 'open' ? 'border-[#846adf] text-[#846adf] bg-purple-50' : 'border-[#846adf] text-[#846adf] bg-white hover:text-white hover:bg-[#846adf]'),
                                            onClick: openAll,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 33
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mr-1 text-xs font-bold",
                                                    children: "Mở tất cả"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 33
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                            lineNumber: 379,
                                            columnNumber: 29
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                    lineNumber: 365,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/admin/services/parents/add",
                                    onClick: function() {
                                        return setIsShowCreateCategoryModal(!isShowCreateCategoryModal);
                                    },
                                    className: "flex items-center gap-2 px-2 py-1.5 rounded-sm border text-sm font-medium transition-opacity duration-300 cursor-pointer bg-[#846adf]! text-white! hover:opacity-90",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                            lineNumber: 400,
                                            columnNumber: 29
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mr-1 text-xs font-bold",
                                            children: "Thêm chuyên mục cha"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                            lineNumber: 401,
                                            columnNumber: 29
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                    lineNumber: 395,
                                    columnNumber: 25
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                            lineNumber: 363,
                            columnNumber: 21
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2.5",
                            children: services.map(function(service) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 rounded-md shadow-sm border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 p-3.5 hover:bg-gray-100 transition-colors cursor-pointer",
                                            onClick: function() {
                                                return toggleService(service.id);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "cursor-move text-gray-600",
                                                    onClick: function(e) {
                                                        return e.stopPropagation();
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 41
                                                    }, _this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                    lineNumber: 420,
                                                    columnNumber: 37
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                    iconName: service.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 37
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-gray-800",
                                                        children: service.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 41
                                                    }, _this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 37
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    onClick: function(e) {
                                                        return e.stopPropagation();
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#846adf] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                        className: "w-3.5 h-3.5 text-white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                        lineNumber: 435,
                                                                        columnNumber: 49
                                                                    }, _this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                    lineNumber: 434,
                                                                    columnNumber: 45
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-bold",
                                                                    children: service.packages
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                    lineNumber: 437,
                                                                    columnNumber: 45
                                                                }, _this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                            lineNumber: 433,
                                                            columnNumber: 41
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#49b6f5] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$1$2d$0$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp10$3e$__["ArrowUp10"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                        lineNumber: 445,
                                                                        columnNumber: 49
                                                                    }, _this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                    lineNumber: 444,
                                                                    columnNumber: 45
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-bold",
                                                                    children: service.tasks
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                    lineNumber: 447,
                                                                    columnNumber: 45
                                                                }, _this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 41
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "relative inline-flex items-center cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    className: "sr-only peer",
                                                                    checked: service.enabled,
                                                                    onChange: function() {}
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                    lineNumber: 454,
                                                                    columnNumber: 45
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-11 h-6 rounded-full peer transition-colors ".concat(service.enabled ? 'bg-[#846adf]' : 'bg-gray-300'),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform ".concat(service.enabled ? 'translate-x-5' : '')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                        lineNumber: 462,
                                                                        columnNumber: 49
                                                                    }, _this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                    lineNumber: 460,
                                                                    columnNumber: 45
                                                                }, _this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                            lineNumber: 453,
                                                            columnNumber: 41
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: function(e) {
                                                                e.stopPropagation();
                                                                toggleService(service.id);
                                                            },
                                                            className: "p-1 hover:bg-gray-200 rounded transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                className: "w-5 h-5 text-gray-600 transition-transform ".concat(expandedServices.includes(service.id) ? 'rotate-180' : '')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                lineNumber: 474,
                                                                columnNumber: 45
                                                            }, _this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 41
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 37
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                            lineNumber: 415,
                                            columnNumber: 33
                                        }, _this),
                                        expandedServices.includes(service.id) && service.subServices.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-gray-200 p-4 bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-2 mb-4 mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/admin/services/children/add",
                                                            className: "flex items-center justify-center gap-1 w-full px-2 py-1 bg-white border border-[#846adf] text-[#846adf] rounded-sm text-xs! font-medium hover:bg-[#846adf]! hover:text-white! transition-colors cursor-pointer duration-600",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                    lineNumber: 491,
                                                                    columnNumber: 49
                                                                }, _this),
                                                                "Thêm chuyên mục con"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 45
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            className: "flex items-center justify-center gap-1 w-full px-2 py-1 bg-white border text-[#26BF94] rounded text-xs! font-medium border-[#26BF94] transition-colors cursor-pointer hover:bg-[#26BF94]! hover:text-white! duration-600",
                                                            href: "/admin/services/children",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                    lineNumber: 500,
                                                                    columnNumber: 49
                                                                }, _this),
                                                                "DANH SÁCH CHUYÊN MỤC CON"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                            lineNumber: 496,
                                                            columnNumber: 45
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/admin/services/parents/edit/".concat(service.id),
                                                            className: "flex items-center justify-center gap-1 w-full px-2 py-1 bg-white border text-[#49B6F5] rounded text-xs! font-medium border-[#49B6F5] transition-colors cursor-pointer hover:bg-[#49B6F5]! hover:text-white! duration-600",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SquarePen$3e$__["SquarePen"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                    lineNumber: 509,
                                                                    columnNumber: 49
                                                                }, _this),
                                                                "Sửa"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                            lineNumber: 505,
                                                            columnNumber: 45
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: function() {
                                                                return showDeleteParentServiceWarningAlert(service.id);
                                                            },
                                                            className: "flex items-center justify-center gap-1 w-full px-2 py-1 bg-white border text-red-600 rounded text-xs! font-medium border-red-600 transition-colors cursor-pointer hover:bg-red-600! hover:text-white! duration-600",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                    lineNumber: 518,
                                                                    columnNumber: 49
                                                                }, _this),
                                                                "Xóa"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                            lineNumber: 514,
                                                            columnNumber: 45
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 41
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-sm overflow-hidden border border-gray-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                className: "bg-gray-100 border-b border-gray-200",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-4 py-3 text-left text-sm font-bold text-black",
                                                                            children: "Chuyên mục con"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                            lineNumber: 528,
                                                                            columnNumber: 57
                                                                        }, _this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-4 py-3 text-center text-sm font-bold text-black",
                                                                            children: "Ảnh"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                            lineNumber: 531,
                                                                            columnNumber: 57
                                                                        }, _this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-4 py-3 text-center text-sm font-bold text-black",
                                                                            children: "Dịch vụ"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                            lineNumber: 534,
                                                                            columnNumber: 57
                                                                        }, _this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-4 py-3 text-center text-sm font-bold text-black",
                                                                            children: "Trạng thái"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                            lineNumber: 537,
                                                                            columnNumber: 57
                                                                        }, _this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-4 py-3 text-center text-sm font-bold text-black",
                                                                            children: "Thao tác"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                            lineNumber: 540,
                                                                            columnNumber: 57
                                                                        }, _this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                    lineNumber: 527,
                                                                    columnNumber: 53
                                                                }, _this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                lineNumber: 526,
                                                                columnNumber: 49
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: service.subServices.map(function(sub, idx) {
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "border-b border-gray-100 hover:bg-gray-50 transition-colors",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-4 py-3",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                                                                            className: "w-4 h-4 text-gray-400 cursor-move"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                                            lineNumber: 550,
                                                                                            columnNumber: 69
                                                                                        }, _this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[13px] text-gray-700 font-bold",
                                                                                            children: sub.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                                            lineNumber: 551,
                                                                                            columnNumber: 69
                                                                                        }, _this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                                    lineNumber: 549,
                                                                                    columnNumber: 65
                                                                                }, _this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                                lineNumber: 548,
                                                                                columnNumber: 61
                                                                            }, _this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-4 py-3 text-center"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                                lineNumber: 556,
                                                                                columnNumber: 61
                                                                            }, _this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-4 py-3 text-center",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "inline-flex items-center justify-center w-5 h-5 bg-[#846adf] text-white rounded-full text-[10px] font-semibold",
                                                                                    children: sub.services
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                                    lineNumber: 558,
                                                                                    columnNumber: 65
                                                                                }, _this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                                lineNumber: 557,
                                                                                columnNumber: 61
                                                                            }, _this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-4 py-3 text-center",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: function() {
                                                                                        return handleToggleSubService(service.id, idx);
                                                                                    },
                                                                                    className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none cursor-pointer ".concat(sub.enabled ? 'bg-[#846adf]' : 'bg-gray-300'),
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ease-in-out ".concat(sub.enabled ? 'translate-x-5' : 'translate-x-0.5')
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                                        lineNumber: 568,
                                                                                        columnNumber: 69
                                                                                    }, _this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                                    lineNumber: 563,
                                                                                    columnNumber: 65
                                                                                }, _this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                                lineNumber: 562,
                                                                                columnNumber: 61
                                                                            }, _this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-4 py-3",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center justify-center gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            href: "/admin/services/packages",
                                                                                            className: "p-2 bg-[#846adf]! hover:opacity-90 text-white! rounded transition-colors cursor-pointer",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                                                                className: "w-4 h-4"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                                                lineNumber: 580,
                                                                                                columnNumber: 73
                                                                                            }, _this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                                            lineNumber: 576,
                                                                                            columnNumber: 69
                                                                                        }, _this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            href: "/admin/services/children/edit/".concat(sub.id),
                                                                                            className: "p-2 bg-[#49b6f5]! hover:bg-cyan-600 text-white! rounded transition-colors cursor-pointer",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                                                className: "w-4 h-4"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                                                lineNumber: 586,
                                                                                                columnNumber: 73
                                                                                            }, _this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                                            lineNumber: 582,
                                                                                            columnNumber: 69
                                                                                        }, _this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            onClick: function() {
                                                                                                return showDeleteChildServiceWarningAlert(sub.id);
                                                                                            },
                                                                                            className: "p-2 bg-[#E6533C] hover:bg-red-600 text-white rounded transition-colors cursor-pointer",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                                className: "w-4 h-4"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                                                lineNumber: 592,
                                                                                                columnNumber: 73
                                                                                            }, _this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                                            lineNumber: 588,
                                                                                            columnNumber: 69
                                                                                        }, _this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                                    lineNumber: 575,
                                                                                    columnNumber: 65
                                                                                }, _this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                                lineNumber: 574,
                                                                                columnNumber: 61
                                                                            }, _this)
                                                                        ]
                                                                    }, idx, true, {
                                                                        fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                        lineNumber: 547,
                                                                        columnNumber: 57
                                                                    }, _this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                                lineNumber: 545,
                                                                columnNumber: 49
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 45
                                                    }, _this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 41
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                            lineNumber: 484,
                                            columnNumber: 37
                                        }, _this)
                                    ]
                                }, service.id, true, {
                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                    lineNumber: 410,
                                    columnNumber: 29
                                }, _this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                            lineNumber: 408,
                            columnNumber: 21
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-md px-4 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleQuestionMark$3e$__["CircleQuestionMark"], {
                                    className: "w-3.5 h-3.5 text-cyan-500 mt-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                    lineNumber: 609,
                                    columnNumber: 25
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-cyan-600 font-medium",
                                    children: "Bạn có thể kéo thả các chuyên mục cha để sắp xếp thứ tự. Nhấp vào biểu tượng kế và thả để dời vị trí."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                                    lineNumber: 610,
                                    columnNumber: 25
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/services/parents/page.tsx",
                            lineNumber: 608,
                            columnNumber: 21
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/services/parents/page.tsx",
                    lineNumber: 361,
                    columnNumber: 17
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/services/parents/page.tsx",
                lineNumber: 359,
                columnNumber: 13
            }, _this)
        ]
    }, void 0, true);
};
_s(ParentServices, "MrpHGtomxd4KP6242/Enwxq6QD8=");
_c = ParentServices;
const __TURBOPACK__default__export__ = ParentServices;
var _c;
__turbopack_context__.k.register(_c, "ParentServices");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_d9657151._.js.map