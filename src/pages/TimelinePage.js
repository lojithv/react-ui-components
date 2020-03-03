import React, { useRef, useState } from 'react';
import { Timeline, Table, BackTopBtn, Card, Collapse, Switch, Select, Icon } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const rows = [
    { 
        property: 'items', 
        description: 'Timeline data array', 
        default: '', 
        type: 'object[]',
        value: ''
    },
    { 
        property: 'date', 
        description: 'Set timeline date key', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'title', 
        description: 'Set timeline title key', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'subtitle', 
        description: 'Set timeline subtitle key', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'data', 
        description: 'Set timeline custom data', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'centered', 
        description: 'Set timeline position to center', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'flatCard', 
        description: 'Set timeline data card flat', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'color', 
        description: 'Set timeline color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error | yellow | dark'
    },
    { 
        property: 'tagColor', 
        description: 'Set date Tag color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error | yellow | dark'
    },
    { 
        property: 'tagOutlined', 
        description: 'Set timeline date Tag outlined', 
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'icon', 
        description: 'Set icon',
        default: '', 
        type: 'string',
        value: 'home | search | etc. (see icon names list in docs)'
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

const items = [
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' }
]

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Timeline, Switch, Select, Icon } from '@assenti/react-ui-components';
const colors = ['primary', 'info', 'success', 'error', 'dark', 'yellow'];
const items = [
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
    { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' }
]

function Example() {
    const [icon, setIcon] = useState(false);
    const [tagOutlined, setTagOutlined] = useState(false);
    const [color, setColor] = useState(colors[0]);
    const [tagColor, setTagColor] = useState(colors[1]);

    return (
        <div>
            <div className="row column py-10">
                <Switch 
                    color="primary" 
                    check={icon}
                    rightLabel="Icon"
                    className="my-10" 
                    onChange={() => setIcon(!icon)}/>
                <Switch 
                    color="primary" 
                    check={tagOutlined}
                    className="my-10"
                    rightLabel="Tag outlined" 
                    onChange={() => setTagOutlined(!tagOutlined)}/>
            </div>
            <div className="pb-20">
                <Select
                    items={colors}
                    prefix={<Icon name="brush"/>}
                    width={200}
                    label="Timeline color"
                    color="primary"
                    className="mr-10"
                    value={color}
                    onChange={v => setColor(v)}/>
                <Select
                    items={colors}
                    prefix={<Icon name="brush"/>}
                    width={200}
                    color="primary"
                    label="Tag color"
                    value={tagColor}
                    onChange={v => setTagColor(v)}/>
            </div>
            <Timeline 
                items={items} 
                date="date"
                centered
                color={color}
                tagOutlined={tagOutlined}
                tagColor={tagColor}
                flatCard
                icon={icon ? 'star' : ''}
                title="title"
                subtitle="subtitle"/>
        </div>
    )
}`

const colors = ['primary', 'info', 'success', 'error', 'dark', 'yellow'];

const TimelinePage = () => {
    const api = useRef();
    const parent = useRef();
    const [icon, setIcon] = useState(false);
    const [tagOutlined, setTagOutlined] = useState(false);
    const [color, setColor] = useState(colors[0]);
    const [tagColor, setTagColor] = useState(colors[1]);

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'center'})
    }

    return (
        <div className="rui-page" ref={parent}>
            <div className="row align-center space-between">
                <div className="rui-page-title">Timeline Component</div>
                <div onClick={() => goToApi()} className="rui-link fz-13 fw-bold mr-10">API</div>
            </div>
            <Card outlined title="Timeline component usage">
                <div className="row column py-10">
                    <Switch 
                        color="primary" 
                        check={icon}
                        rightLabel="Icon"
                        className="my-10" 
                        onChange={() => setIcon(!icon)}/>
                    <Switch 
                        color="primary" 
                        check={tagOutlined}
                        className="my-10"
                        rightLabel="Tag outlined" 
                        onChange={() => setTagOutlined(!tagOutlined)}/>
                </div>
                <div className="pb-20">
                    <Select
                        items={colors}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        label="Timeline color"
                        color="primary"
                        className="mr-10"
                        value={color}
                        onChange={v => setColor(v)}/>
                    <Select
                        items={colors}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        color="primary"
                        label="Tag color"
                        value={tagColor}
                        onChange={v => setTagColor(v)}/>
                </div>
                <Timeline 
                    items={items} 
                    date="date"
                    centered
                    color={color}
                    tagOutlined={tagOutlined}
                    tagColor={tagColor}
                    flatCard
                    icon={icon ? 'star' : ''}
                    title="title"
                    subtitle="subtitle"/>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <h2 ref={api}>API</h2>
            <BackTopBtn setRef={parent} dark size="medium"/>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={rows}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}

export default TimelinePage;