import React, { useState } from 'react';
import { Select, Icon, Switch, ThemeContext, Divider } from '../components';
import { countries } from '../data/countries';
import Page from '../layouts/Page';

const rows = [
    { 
        property: 'items', 
        description: 'Select options', 
        default: '', 
        type: 'string[] | object[]',
        value: ''
    },
    { 
        property: 'itemKey', 
        description: 'Set if you pass items as array of objects', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'childrenKey', 
        description: 'Set if you pass items with children array (pass the key of item that has children array)', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'onChange', 
        description: 'Invokes in select option select (return item value)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'searchable', 
        description: 'Enable searching field in select menu (has effect only with one level list)', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'returnObject', 
        description: 'Returns item object on select change (used when items passed as array of objects, works only with one level items)', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'size', 
        description: 'Set select size', 
        default: '', 
        type: 'string',
        value: 'medium | large'
    },
    { 
        property: 'width', 
        description: 'Set select width', 
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'maxHeight', 
        description: 'Set select list max height', 
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'label', 
        description: 'Set select label', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'placeholder', 
        description: 'Set placeholder', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'color', 
        description: 'Set select color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'borderType', 
        description: 'Set borders type', 
        default: '', 
        type: 'string',
        value: 'tile | smooth | rounded'
    },
    { 
        property: 'multiple', 
        description: 'Enable multiple selection (Warning: if multiple prop set, childrenKey has no effect)',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onSelect', 
        description: 'Invokes on multiple selection (return selected value & selected list)',
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'tagColor', 
        description: 'Set Tag color (Has effect only with multiple prop)',
        default: '', 
        type: 'string',
        value: 'primary | info | success | error | black'
    },
    { 
        property: 'tagOutlined', 
        description: 'Set Tag outlined prop',
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'prefix', 
        description: 'Set prefix',
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'dark',
        description: 'Set dark mode', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'whiteBackground',
        description: 'Set input background color to white', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

const usage = 
`// Usage examples
import React, { useState } from 'react';
import { Select, Icon } from '@assenti/react-ui-components';

const countries = [
    { country: 'Kazakhstan', cities: [ 'Nur-Sultan', 'Almaty', 'Shymkent' ] }, 
    { country: 'Russia', cities: ['Moscow', 'St. Petersburg', 'Krasnodar'] }, 
    { country: 'USA', cities: ['Washington, D.C.', 'New York City', 'San Francisco'] }, 
    { country: 'United Kingdom', cities: ['London', 'York', 'Manchester'] }, 
    { country: 'Canada', cities: ['Ottawa', 'Toronto', 'Vancouver'] }, 
    { country: 'Germany', cities: ['Berlin', 'Munich', 'Hamburg'] }, 
    { country: 'France', cities: ['Paris', 'Nice', 'Marselle'] }, 
    { country: 'China', cities: ['Beijing', 'Shanghai', 'Shenzhen'] },
    { country: 'Japan', cities: ['Tokyo', 'Osaka', 'Kyoto'] },
    { country: 'South Korea', cities: ['Seoul', 'Busan', 'Daegu'] }
]
function Example() {
    const [city, setCity] = useState('');

    return (
        <>
            <Select
                prefix={<Icon name="earth"/>}
                label="One level items with multiple select"
                items={countries}
                itemKey="country"
                color="primary"
                maxHeight={200}
                width={250}
                multiple
                placeholder="Countries"
                value={city}
                tagOutlined
                onSelect={(selectedItem, selectedItems) => 
                    console.log(selectedItem, selectedItems)}
                onChange={value => setCity(value)}/>
        </>
    )
}`

const colors = ['primary', 'info', 'success', 'error'];
const sizes = ['default', 'medium', 'large'];
const borders = ['default', 'tile', 'rounded', 'smooth'];

const SelectPage = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[0]);
    const [border, setBorder] = useState(borders[0]);
    const [disabled, setDisabled] = useState(false);
    const [maxHeight, setMaxHeight] = useState(false);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    backTopBtn
                    apiSearchable
                    componentName="<Select/>"
                    apiDescItems={rows}>
                    <Select
                        items={colors}
                        dark={theme}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        label="Color"
                        color="primary"
                        className="my-5"
                        value={color}
                        onChange={v => setColor(v)}/>
                    <br/>
                    <Select
                        items={sizes}
                        dark={theme}
                        prefix={<Icon name="format-size"/>}
                        width={200}
                        label="Size"
                        color="primary"
                        className="my-5"
                        value={size}
                        onChange={v => setSize(v)}/>
                    <br/>
                    <Select
                        items={borders}
                        dark={theme}
                        prefix={<Icon name="shape"/>}
                        width={200}
                        label="Border type"
                        color="primary"
                        className="my-5"
                        value={border}
                        onChange={v => setBorder(v)}/>
                    <br/>
                    <Switch 
                        check={maxHeight} 
                        color="primary"
                        rightLabel="Set max height" 
                        className="my-10"
                        onChange={() => setMaxHeight(!maxHeight)}/>
                    <Switch 
                        check={disabled} 
                        color="primary"
                        rightLabel="Disabled" 
                        className="my-10"
                        onChange={() => setDisabled(!disabled)}/>
                    <Divider/>
                    <Select
                        items={countries}
                        prefix={<Icon name="earth"/>}
                        itemKey="country"
                        label="One level items select"
                        width={250}
                        dark={theme}
                        maxHeight={maxHeight ? 200 : null}
                        disabled={disabled}
                        size={size}
                        borderType={border}
                        clearable
                        onClear={() => setCountry('')}
                        color={color}
                        placeholder="Countries"
                        value={country}
                        onChange={value => setCountry(value)}/>
                    <br/>
                    <br/>
                    <Select
                        prefix={<Icon name="earth"/>}
                        label="Two level items select"
                        items={countries}
                        itemKey="country"
                        childrenKey="cities"
                        disabled={disabled}
                        color={color}
                        dark={theme}
                        borderType={border}
                        width={250}
                        size={size}
                        placeholder="Cities"
                        value={city}
                        onChange={value => {
                            setCity(value)
                            console.log(value)
                        }}/>
                    <br/>
                    <br/>
                    <Select
                        prefix={<Icon name="earth"/>}
                        label="One level items searchable select"
                        items={countries}
                        itemKey="country"
                        color={color}
                        dark={theme}
                        disabled={disabled}
                        maxHeight={maxHeight ? 200 : null}
                        width={250}
                        borderType={border}
                        searchable
                        size={size}
                        placeholder="Countries"
                        value={country}
                        onChange={value => setCountry(value)}/>
                    <br/>
                    <br/>
                    <Select
                        prefix={<Icon name="earth"/>}
                        label="One level items with multiple select"
                        items={countries}
                        itemKey="country"
                        color={color}
                        dark={theme}
                        maxHeight={maxHeight ? 200 : null}
                        width={250}
                        disabled={disabled}
                        multiple
                        size={size}
                        borderType={border}
                        placeholder="Countries"
                        value={city}
                        tagOutlined
                        onSelect={(selectedItem, selectedItems) => 
                            console.log(selectedItem, selectedItems)}
                        onChange={value => setCity(value)}/>
                </Page>
            )}
        </ThemeContext.Consumer>
        
    )
}
export default SelectPage;