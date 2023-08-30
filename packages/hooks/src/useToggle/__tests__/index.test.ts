import { renderHook, act } from '@testing-library/react';
import useToggle from '../index';

const callToggle = (hook) => {
    act(() => {
      hook.result.current[1].toggle();
    });
  };

const callSetLeft = (hook) => {
    act(() => {
      hook.result.current[1].setLeft();
    });
  }

const callSetRight = (hook) => {
    act(() => {
      hook.result.current[1].setRight();
    });
}

describe('useToggle', () => {
    it('test on init',  () => {
        const hook = renderHook(() => useToggle());
        expect(hook.result.current[0]).toBeFalsy();
      });

      it('test in method', () => {
        const hook = renderHook(() => useToggle('test', 'tset'))
        callToggle(hook);
        expect(hook.result.current[0]).toBe('tset');
        callToggle(hook);
        expect(hook.result.current[0]).toBe('test');
        callSetLeft(hook);
        expect(hook.result.current[0]).toBe('test');
        callSetRight(hook);
        expect(hook.result.current[0]).toBe('tset');
      })
});