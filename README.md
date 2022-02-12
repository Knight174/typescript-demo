# typescript-demo
一份 TS 学习记录。

## 0. 项目初始化
```pnpm init -y```

## 1. 安装 ts 编译器
```pnpm add typescript```

## 2. 编译 ts 转为 js
```pnpx tsc my-code.ts```
- tsc: typescript compiler

## 3. 编译到指定输出目录 --outDir
```pnpx tsc my-code.ts --outDir js```
- 输出到 js 目录下

## 4. 生成 ts 配置文件
```pnpx tsc tsc --init```