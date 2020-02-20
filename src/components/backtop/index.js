import React, { useEffect, useState, createRef } from 'react'
import { Button } from '../button';
import { CSSTransition } from 'react-transition-group';
import { Tooltip } from '../tooltip';

export const BackTopBtn = (props) => {
    const [visible, setVisible] = useState(false);
    const [breakpoint] = useState(props.breakpoint ? props.breakpoint : 60);
    const blockRef = createRef();

    const handleScroll = (e) => {
        if (e.srcElement.scrollTop > breakpoint) setVisible(true)
        else setVisible(false)
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll, true);
        return () => document.removeEventListener('scroll', handleScroll, true);
    }, ['scroll', document])

    const goTop = () => {
        if (props.setRef.current) {
            props.setRef.current.scrollIntoView({
                behavior: "smooth",
                block: 'start'
            })
        }
    }

    const btnBackTopClass = () => {
        let result = '';
        let className = {
            name: 'btn-back-top',
            dark: props.dark ? 'dark' : ''
        }
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    return (
        <div 
            className={btnBackTopClass()}
            ref={blockRef}
            style={{ 
                right: props.offsetX ? props.offsetX : 25, 
                bottom: props.offsetY ? props.offsetY : 25
            }}>
            <CSSTransition
                in={visible}
                timeout={500}
                classNames="btn-back-top"
                unmountOnExit>
                {props.tooltip ?
                    <Tooltip tooltip={props.tooltip}>
                        <Button 
                            icon="arrow-up-bold"
                            lifted
                            size={props.size ? props.size : ''}
                            onClick={() => goTop()} 
                            light={!props.dark ? true : false}
                            dark={props.dark ? true : false}/>
                    </Tooltip> : 
                    <Button 
                        icon="arrow-up-bold"
                        lifted
                        size={props.size ? props.size : ''}
                        onClick={() => goTop()} 
                        light={!props.dark ? true : false}
                        dark={props.dark ? true : false}/>
                }
            </CSSTransition>
        </div>
    )
}
