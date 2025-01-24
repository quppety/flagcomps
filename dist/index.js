'use strict';

var jsxRuntime = require('react/jsx-runtime');
var reactRouterDom = require('react-router-dom');
var react$1 = require('@chakra-ui/react');
var react = require('react');

var useCounterControl = function () {
    var _a = react.useState(1), counter = _a[0], setCounter = _a[1];
    var handleCounter = function () {
        setCounter(function (prev) { return prev + 1; });
    };
    return {
        handleCounter: handleCounter,
        counter: counter,
    };
};

var Button = function (_a) {
    var onClick = _a.onClick, labelContent = _a.labelContent;
    return (jsxRuntime.jsx("button", { onClick: onClick, style: {
            backgroundColor: 'transparent',
            paddingRight: '1rem',
            paddingLeft: '1rem',
            height: '2.5rem',
        }, children: labelContent }));
};

function NavBar() {
    var _a = react$1.useColorMode(), colorMode = _a.colorMode, toggleColorMode = _a.toggleColorMode;
    var _b = useCounterControl(), counter = _b.counter, handleCounter = _b.handleCounter;
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(react$1.Box, { bg: react$1.useColorModeValue('gray.200', 'gray.600'), px: 4, children: jsxRuntime.jsxs(react$1.Flex, { h: 16, alignItems: "center", justifyContent: "center", gap: 10, children: [jsxRuntime.jsx(Button, { labelContent: jsxRuntime.jsx(reactRouterDom.Link, { to: "/", children: jsxRuntime.jsx("img", { src: "/home.png", alt: "home", height: 30, width: 30 }) }) }), jsxRuntime.jsx(Button, { onClick: toggleColorMode, labelContent: jsxRuntime.jsx("img", { src: colorMode === 'light' ? '/dark.png' : 'light.png', alt: "theme", height: 30, width: 30 }) }), jsxRuntime.jsx(Button, { labelContent: jsxRuntime.jsx(reactRouterDom.Link, { to: "/scores", children: jsxRuntime.jsx("img", { src: "/score.png", alt: "score", height: 32, width: 32 }) }) }), jsxRuntime.jsx(Button, { onClick: handleCounter, labelContent: counter })] }) }), jsxRuntime.jsx(reactRouterDom.Outlet, {})] }));
}

exports.NavBar = NavBar;
//# sourceMappingURL=index.js.map
