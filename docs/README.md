# Apt 是什么？

> apt（Advanced Packaging Tool）是一个在 Debian 和 Ubuntu 中的 Shell 前端软件包管理器。
>
> apt 命令提供了查找、安装、升级、删除某一个、一组甚至全部软件包的命令，而且命令简洁而又好记。
>
> apt 命令执行需要超级管理员权限(root)。
>
> **注意：如果你是 Debian 和 Ubuntu 操作系统，那么默认就会有这个，其他的系统就暂时不知道了。**

**语法:**`apt [options] [command] [package ...]`

- **options：**可选，选项包括 -h（帮助），-y（当安装过程提示选择全部为"yes"），-q（不显示安装的过程）等等。
- **command：**要进行的操作。
- **package**：安装的包名。

# 可选参数

- **-h** 帮助文件。
- **-q** 输出到日志 - 无进展指示
- **-qq** 不输出信息，错误除外
- **-d** 仅下载 - 不安装或解压归档文件
- **-s** 不实际安装。模拟执行命令
- **-y** 在需要确认的场景中回应 yes
- **-f** 尝试修正系统依赖损坏处
- **-m** 如果归档无法定位，尝试继续
- **-u** 同时显示更新软件包的列表
- **-b** 获取源码包后编译
- **-V** 显示详细的版本号
- **-c=?** 阅读此配置文件
- **-o=?** 设置自定的配置选项，如 -o dir::cache=/tmp

# 常用命令

> apt install apt remove apt clean 这三个命令会比较常用

# 所有操作的命令

> 这个包管理的所有命令,大致的用法就和 npm、yarn、cnpm 这些包的用法一样

## 安装软件包

- **apt install packagename**: 安装指定软件包
- **apt install packagename --reinstall** : 重新安装指定包
- **apt install -f** :修复所有安装包
- **apt source packagename**:下载该包的源码
- **apt build-dep packagename**: 安装相关的编译环境,

## 升级软件包

- **apt update**:更新源文件，不会升级任何软件
- **apt upgrade**: 升级所有安装的软件包
- **apt install packageName --only-upgrade**：仅升级指定包
- **apt dist-upgrade** :升级系统（没用过）
- **apt dselect-upgrade** : 使用 dselect 升级（没用过）
- **apt hold packagename**： 设置这个之后，执行 **apt upgrate**会忽略这个包的更新
- **apt unhold packagename**： 设置了 apt hold 的包可以用这个命令解除

## 删除软件包

- **apt remove packagename**: 删除软件包
- **apt remove packagename --purge** : 删除包和配置文件
- **apt-get autoremove packagename --purge** 这个也是删除包和配置文件，只不过更加的彻底

## 查询包的信息

- **apt search packageName**：查询指定的包
- **apt show packageName**：显示包的相关信息
- **apt depends packageName**：这个包需要的依赖包
- **apt rdepends packageName**：这个包被哪些包依赖

## 清理

- **apt clean**: 清除无用包
- **apt autoclean**:连同配置文件都清理掉，更加的干净
- **apt check**:检查是否有损坏的依赖
