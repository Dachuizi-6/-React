import React, { useState, createContext, Profiler } from 'react'
// 02、useEffect的使用
import ClassCounterTitleChange from "./02_useEffect使用/01_class实现title的修改"
import EffectHookChangeTitle from './02_useEffect使用/02_useEffect实现title的修改'
import EffectCancleDemo from './02_useEffect使用/03_useEffect模拟订阅和取消订阅'
import MultiEffectHook from './02_useEffect使用/04_多useEffect一起使用'
// 03、useContext使用
import UseContextHookDemo from './03_useContext使用/01_useContext使用'
// 04、useReducer使用
import Home from './04_useReducer使用/home'
import Profile from './04_useReducer使用/profile'
// 05、useCallback使用
import UseCallbackNoDemo from './05_useCallback使用/01_useCallback不能进行的性能优化'

export const UserContext = createContext()
export const ThemeContext = createContext()

export default function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
      {/* 02、useEffect的使用 */}
      {/* <ClassCounterTitleChange /> */}
      {/* <EffectHookChangeTitle /> */}
      {/* {show && <EffectCancleDemo />} */}
      {/* <MultiEffectHook /> */}

      {/* 03、useContext使用 */}
      {/* <UserContext.Provider value={{ name: 'Zohnny', age: 18 }}>
        <ThemeContext.Provider value={{ fontSize: '30px', color: 'red' }}>
          <UseContextHookDemo />
        </ThemeContext.Provider>
      </UserContext.Provider> */}

      {/* 04、useReducer使用 */}
      {/* <Home />
      <Profile /> */}

      {/* 05、useCallback使用 */}
      <UseCallbackNoDemo />

      {/* <button onClick={e => setShow(!show)}>切换显示</button> */}
    </div>
  )
}
