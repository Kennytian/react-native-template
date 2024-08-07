# React Native 应用模板



## Q&A

### 1、Android 无法访问网络
打开 `android/app/src/main/AndroidManifest.xml`，在第10行附件添加`android:usesCleartextTraffic="true"`，如下所示：

```shell
android:roundIcon="@mipmap/ic_launcher_round"
android:usesCleartextTraffic="true"
android:allowBackup="false"
```

### 2、Android 打 AAB 包失败
现在 Google Play 要求上传的包必须是 AAB 格式， 当执行 `./gradlew buildBundle` 时，会报错：
`
org.gradle.execution.TaskSelectionException: Task 'buildBundle' is ambiguous in root project 'rnApp' and its subprojects. Candidates are: 'buildDebugPreBundle', 'buildReleasePreBundle'.
`

打开 `android/app/build.gradle`，在第 134 行附近添加如下代码：
```grovy
task buildBundle {
    dependsOn "bundleRelease"
}
```

### 3、iOS 无法访问网络
由于线上 API 服务器没有配置域名，直接用 IP 访问的，就会造成 iOS Debug 包都无法访问网络。打开 `ios/rnApp/Info.plist`，在第 33 行附近添加如下代码：

```shell
<key>NSExceptionDomains</key>
<dict>
    <key>19.136.9.115</key>
    <dict>
        <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>
        <true/>
    </dict>
</dict>
```
