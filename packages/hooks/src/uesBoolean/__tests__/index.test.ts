import { renderHook, act } from '@testing-library/react';
import useBoolean from '../index';

const callToggle = (hook) => {
    act(() => {
      hook.result.current[1].toggle();
    });
  };

const callSetFalse = (hook) => {
    act(() => {
      hook.result.current[1].setFalse();
    });
  }

const callSetTrue = (hook) => {
    act(() => {
      hook.result.current[1].setTrue();
    });
}

describe('useBoolean', () => {
    it('test on init',  () => {
        const hook = renderHook(() => useBoolean(true));
        expect(hook.result.current[0]).toBeTruthy();
      });

      it('test in method', () => {
        const hook = renderHook(() => useBoolean(true))
        callToggle(hook);
        expect(hook.result.current[0]).toBeFalsy();
        callToggle(hook);
        expect(hook.result.current[0]).toBeTruthy();
        callSetTrue(hook);
        expect(hook.result.current[0]).toBeTruthy();
        callSetFalse(hook);
        expect(hook.result.current[0]).toBeFalsy();
      })
});