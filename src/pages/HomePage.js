import React, { useRef } from 'react';
import { Tag, Card, BackTopBtn, CopyToClipboard, Icon, ThemeContext, themes } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeInstallationNpm = 
`# Install package from NPM
% npm install @assenti/rui-components -S`;

const codeInstallationYarn = 
`# Install package from NPM
% yarn add @assenti/rui-components`;

const codeInstallationRTG = 
`# Install package from NPM
% npm install react-transition-group -S`;

const codeInstallationRTGTypes = 
`# Install package from NPM
% npm install @types/react-transition-group -D`;

const stylesInstallation = 
`// Import styles in index.js | index.ts
import '@assenti/react-ui-components/build/css/main.css';`;

const codeUsage = 
`// Usage example
import React from 'react';
import { Card, Button } from '@assenti/react-ui-components';

function App() {
    return (
        <Card outlined color="primary" title="Button">
            <Button color="primary" name="Rocket" icon="rocket"/>
        </Card>
    );
} 
export default App;`;

const HomePage = () => {
    const parent = useRef();

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page" ref={parent}>
                    <Tag iconLeft="hammer" color="secondary" value="Work in progress..." small/>
                    <div className="py-30">
                        <h1 className="text-center">Welcome to React UI Components</h1>
                        <p className="text-center">UI Components for web apps built on React</p>
                        <div className="text-center">
                            <a aria-label="NPM version"
                                style={{ marginRight: 5 }}
                                href="https://www.npmjs.com/package/@assenti/rui-components">
                                <img alt="" src="https://badgen.net/npm/v/@assenti/rui-components"/>
                            </a>
                            <a aria-label="Downloads" 
                                style={{ marginRight: 5 }}
                                href="https://npm-stat.com/charts.html?package=%40assenti%2Frui-components">
                                <img alt="" src="https://badgen.net/npm/dw/@assenti/rui-components"/>
                            </a>
                            <a aria-label="License" href="https://github.com/Assenti/react-ui-components/edit/master/LICENSE">
                                <img alt="" src="https://badgen.net/npm/license/@assenti/rui-components"/>
                            </a>
                        </div>
                    </div>
                    <div className="row column align-center justify-center">
                        <Tag value="Main Goal" outlined iconLeft="target"/>
                        <h4 className="py-10">
                            Create a lot of usefull and maximum reusable UI components for React apps
                        </h4>
                    </div>
                    <Card dark={theme} header={<h4 className="row align-center">
                        <Icon name="package-down" color={theme ? '#fff' : ''} className="mr-5"/>Install</h4>} 
                        className="mt-20">
                        <h4>npm</h4>
                        <div className="row">
                            <SyntaxHighlighter className="col" language="bash" style={prism}>
                                {codeInstallationNpm}
                            </SyntaxHighlighter>
                            <CopyToClipboard
                                className="my-5 mx-10" 
                                text="npm install @assenti/rui-components -S"/>
                        </div>
                        <h4>yarn</h4>
                        <div className="row full-width">
                            <SyntaxHighlighter className="col" language="bash" style={prism}>
                                {codeInstallationYarn}
                            </SyntaxHighlighter>
                            <CopyToClipboard
                                className="my-5 mx-10" 
                                text="yarn add @assenti/rui-components"/>
                        </div>
                        <br/>
                        <h4>Peer dependencies</h4>
                        <div className="py-5">React UI Components use react-transition-group under the hood, so you should install it too</div>
                        <div className="row full-width">
                            <SyntaxHighlighter className="col" language="bash" style={prism}>
                                {codeInstallationRTG}
                            </SyntaxHighlighter>
                            <CopyToClipboard
                                className="my-5 mx-10" 
                                text="npm install react-transition-group -S"/>
                        </div>
                        <div className="py-5">For TypeScript project (additional)</div>
                        <div className="row full-width">
                            <SyntaxHighlighter className="col" language="bash" style={prism}>
                                {codeInstallationRTGTypes}
                            </SyntaxHighlighter>
                            <CopyToClipboard
                                className="my-5 mx-10" 
                                text="npm install @types/react-transition-group -D"/>
                        </div>
                    </Card>
                    <br/>
                    <Card dark={theme} header={<h4 className="row align-center">
                        <Icon name="cog-outline" color={theme ? '#fff' : ''} className="mr-5"/>Usage
                    </h4>} className="mt-20">
                        <div className="row">
                            <SyntaxHighlighter className="col" language="js" style={prism}>
                                {stylesInstallation}
                            </SyntaxHighlighter>
                            <CopyToClipboard
                                className="my-5 mx-10" 
                                text="import '@assenti/react-ui-components/build/css/main.css';"/>
                        </div>
                        <br/>
                        <div className="row">
                            <SyntaxHighlighter className="col" language="jsx" style={prism}>
                                {codeUsage}
                            </SyntaxHighlighter>
                            <CopyToClipboard
                                className="my-5 mx-10" 
                                text={codeUsage}/>
                        </div>
                    </Card>
                    <br/>
                    <Card dark={theme} 
                        header={<h4 className="row align-center">
                            <Icon name="language-ts" color={theme ? '#fff' : ''} className="mr-5"/>TypeScript
                        </h4>} 
                        className="mt-15">
                        <div className="py-20">
                            <div>TypeScript supported. Just install package to your react typescript app and use it.</div>
                        </div>
                    </Card>
                    <BackTopBtn setRef={parent} dark size="medium"/>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
export default HomePage;