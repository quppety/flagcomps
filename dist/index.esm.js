import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Link, Outlet } from 'react-router-dom';
import { useColorMode, Box, useColorModeValue, Flex } from '@chakra-ui/react';
import { useState } from 'react';

var useCounterControl = function () {
    var _a = useState(1), counter = _a[0], setCounter = _a[1];
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
    return (jsx("button", { onClick: onClick, style: {
            backgroundColor: 'transparent',
            paddingRight: '1rem',
            paddingLeft: '1rem',
            height: '2.5rem',
        }, children: labelContent }));
};

function NavBar() {
    var _a = useColorMode(), colorMode = _a.colorMode, toggleColorMode = _a.toggleColorMode;
    var _b = useCounterControl(), counter = _b.counter, handleCounter = _b.handleCounter;
    return (jsxs(Fragment, { children: [jsx(Box, { bg: useColorModeValue('gray.200', 'gray.600'), px: 4, children: jsxs(Flex, { h: 16, alignItems: "center", justifyContent: "center", gap: 10, children: [jsx(Button, { labelContent: jsx(Link, { to: "/", children: jsx("img", { src: "/home.png", alt: "home", height: 30, width: 30 }) }) }), jsx(Button, { onClick: toggleColorMode, labelContent: jsx("img", { src: colorMode === 'light' ? '/dark.png' : 'light.png', alt: "theme", height: 30, width: 30 }) }), jsx(Button, { labelContent: jsx(Link, { to: "/scores", children: jsx("img", { src: "/score.png", alt: "score", height: 32, width: 32 }) }) }), jsx(Button, { onClick: handleCounter, labelContent: counter })] }) }), jsx(Outlet, {})] }));
}

export { NavBar };
//# sourceMappingURL=index.esm.js.map
