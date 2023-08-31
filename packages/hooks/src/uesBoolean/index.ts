import { useMemo } from 'react'
import useToggle from '../useToggle'

export interface Actions {
    toggle: () => void
    setTrue: () => void
    setFalse: () => void
}

export default function useBoolean(defaultValue: boolean = false): [boolean, Actions] {
    const [state, {toggle, set }] = useToggle(!!defaultValue)
    const actions: Actions =  useMemo(() => {
        const setTrue = () => set(true);
        const setFalse = () => set(false);

        return {
            toggle,
            set: (v) => set(!!v),
            setTrue,
            setFalse,
         }
    }, [])

    return [state, actions]
}