import { useState, useMemo } from 'react'

type defaultFn = () => void

interface Actions<T> {
    toggle: defaultFn
    setLeft: defaultFn
    setRight: defaultFn
}

function useToggle<T = boolean>(): [boolean, Actions<T>]

function useToggle<T>(defaultValue: T): [T, Actions<T>];

function useToggle<D, R>(defaultValue: D, reverseValue: R): [D | R, Actions<D | R>]

function useToggle<D, R>(defaultValue: D = false as D, reverseValue?: R) {
    const [state, setState] = useState<D | R>(defaultValue)

    const actions = useMemo(() => {
        const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R

        const toggle = () => setState(s => s === defaultValue ? reverseValueOrigin : defaultValue)
        const setLeft = () => setState(defaultValue)
        const setRight = () => setState(reverseValueOrigin)

        return { toggle, setLeft, setRight }
    }, [])

    return [state, actions]
}

export default useToggle