import { Countdown, Toast } from "@taroify/core"
import { CountdownInstance } from "@taroify/core/countdown"
import { View } from "@tarojs/components"
import { useRef } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function CountdownWithManualControl() {
  const countRef = useRef<CountdownInstance>(null)
  return (
    <>
      <Toast id="toast" />
      <Countdown
        className="manual-control"
        ref={countRef}
        value={30 * 1000}
        interval={1}
        format="ss:SSS"
        onComplete={() => Toast.open("倒计时结束")}
      />
    </>
  )
}

export default function CountDownDemo() {
  return (
    <Page title="CountDown 倒计时" className="count-down-demo">
      <Block title="基础用法">
        <Countdown value={30 * 60 * 60 * 1000} />
      </Block>
      <Block title="自定义格式">
        <Countdown value={30 * 60 * 60 * 1000} format="DD 天 HH 时 mm 分 ss 秒" />
      </Block>
      <Block title="毫秒级渲染">
        <Countdown interval={1} value={30 * 60 * 60 * 1000} format="HH:mm:ss:SS" />
      </Block>
      <Block title="自定义样式">
        <Countdown value={30 * 60 * 60 * 1000}>
          {(current) => (
            <>
              <View className="block">{current.hours}</View>
              <View className="colon">:</View>
              <View className="block">{current.minutes}</View>
              <View className="colon">:</View>
              <View className="block">{current.seconds}</View>
            </>
          )}
        </Countdown>
      </Block>
      <Block className="manual-control-block" title="手动控制">
        <CountdownWithManualControl />
      </Block>
    </Page>
  )
}
