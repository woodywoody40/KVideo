# 影片整合平台 (Woody TV)

![Woody TV Banner](public/icon.png)

> 一個基於 Next.js 16 建構的現代化影片整合播放平台。採用獨特的 "Liquid Glass" 設計語言，提供流暢的視覺體驗和強大的影片搜尋功能。

**🌐 線上體驗：[https://woodytv.vercel.app/](https://woodytv.vercel.app/)**

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

## 📖 專案簡介

**Woody TV** 是一個高效能、現代化的影片整合與播放應用，專注於提供極致的用戶體驗和視覺設計。本專案利用 Next.js 16 的最新特性，結合 React 19 和 Tailwind CSS v4，打造了一個既美觀又強大的影片瀏覽平台。

### 核心設計理念：Liquid Glass（液態玻璃）

專案的視覺設計基於 **"Liquid Glass"** 設計系統，這是一套融合了以下特性的現代化 UI 設計語言：

- **玻璃擬態效果**：透過 `backdrop-filter` 實現的磨砂半透明效果，讓 UI 元素如同真實的玻璃材質
- **通用柔和度**：統一使用 `rounded-2xl` 和 `rounded-full` 兩種圓角半徑，創造和諧的視覺體驗
- **光影互動**：懸停和聚焦狀態下的內發光效果，模擬光線被「捕捉」的物理現象
- **流暢動畫**：基於物理的 `cubic-bezier` 曲線，實現自然的加速和減速過渡
- **深度層級**：清晰的 z-axis 層次結構，增強空間感和互動回饋

## ✨ 核心功能

### 🎥 智慧影片播放

- **HLS 串流媒體支援**：原生支援 HLS (.m3u8) 格式，提供流暢的影片播放體驗
- **智慧快取機制**：Service Worker 驅動的智慧快取系統，自動預先載入和快取影片片段
- **背景下載**：利用觀看歷史，在背景自動下載歷史影片，確保離線也能觀看
- **播放控制**：完整的播放控制功能，包括進度條、音量控制、播放速度調節、全螢幕模式等
- **行動端優化**：專門為行動裝置優化的播放器介面和手勢控制

### 🔍 多源並行搜尋

- **整合搜尋引擎**：同時在多個影片源中並行搜尋，大幅提升搜尋速度
- **自定義影片源**：支援新增、編輯和管理自定義影片源
- **智慧解析**：統一的解析器系統，自動處理不同源的資料格式
- **搜尋歷史**：自動儲存搜尋歷史，支援快速重新搜尋
- **結果排序**：支援按評分、時間、相關性等多種方式排序搜尋結果

### 🎬 豆瓣整合

- **電影 & 電視劇分類**：支援在電影和電視劇之間無縫切換，方便查找不同類型的影視資源
- **詳細影視資訊**：自動獲取豆瓣評分、演員陣容、劇情簡介等詳細資訊
- **推薦系統**：基於豆瓣資料的相關推薦
- **專業評價**：展示豆瓣用戶評價和專業影評

### 💾 觀看歷史管理

- **自動記錄**：自動記錄觀看進度和歷史
- **斷點續播**：從上次觀看位置繼續播放
- **歷史管理**：支援刪除單條歷史或清空全部歷史
- **隱私保護**：所有資料儲存在本地，不上傳到伺服器

### 📱 響應式設計

- **全端適配**：完美支援桌面、平板和行動裝置
- **行動優先**：專門的行動端組件和互動設計
- **觸控優化**：針對觸控螢幕優化的手勢和互動

### 🌙 主題系統

- **深色/淺色模式**：支援系統級主題切換
- **動態主題**：基於 CSS Variables 的動態主題系統
- **無縫過渡**：主題切換時的平滑過渡動畫

### ⌨️ 無障礙設計

- **鍵盤導覽**：完整的鍵盤快速鍵支援
- **ARIA 標籤**：符合 WCAG 2.2 標準的無障礙實現
- **語義化 HTML**：使用語義化標籤提升可存取性
- **高對比度**：確保 4.5:1 的文字對比度

### 💎 進階模式

- **獨立入口**：在瀏覽器網址列直接輸入 `/premium` 即可進入獨立的進階影片專區
- **內容隔離**：進階內容與普通內容完全物理隔離，互不干擾
- **專屬設定**：擁有獨立的內容源管理和功能設定

### 🛡️ 廣告過濾
- **多模式選擇**：支援關閉、關鍵字過濾、智慧啟發式過濾(Beta)和激進模式。
- **UI 整合**：在播放器設定選單中直接切換模式，即時生效。
- **自定義關鍵字**：支援透過環境變數擴充過濾關鍵字。
- **高效能**：基於串流處理，對播放載入速度幾乎無影響。

## 🔐 隱私保護

本應用注重用戶隱私：

- **本地存儲**：所有資料儲存在本地瀏覽器中
- **無伺服器資料**：不收集或上傳任何用戶資料
- **自定義源**：用戶可自行配置影片源

## 🔒 密碼存取控制

Woody TV 支援兩種密碼保護方式：

### 方式一：本地儲存密碼

在設定頁面中啟用密碼存取，並新增密碼：

- **裝置獨立**：僅在目前瀏覽器/裝置有效
- **可管理**：可隨時新增或刪除
- **多密碼支援**：可設定多個有效密碼

### 方式二：環境變數密碼（推薦用於部署）

透過 `ACCESS_PASSWORD` 或 `ACCESS_PASSWORD_2` 環境變數設定全域密碼：

**Docker 部署：**

```bash
docker run -d -p 3000:3000 \
  -e ACCESS_PASSWORD=your_password_1 \
  -e ACCESS_PASSWORD_2=your_password_2 \
  --name woody-tv woody-tv:latest
```

**Vercel 部署：**

在 Vercel 專案設定中新增環境變數：
- 變數名：`ACCESS_PASSWORD`
- 變數值：你的第一個密碼
- 變數名：`ACCESS_PASSWORD_2`
- 變數值：你的第二個密碼

**特點：**
- **全域生效**：所有用戶都需要此密碼之一才能存取
- **無法在介面刪除**：只能透過修改環境變數變更
- **與本地密碼相容**：三種密碼都可以解鎖應用
- **密碼持久化**：支援透過 `PERSIST_PASSWORD` 環境變數控制是否在目前裝置上記住密碼。

### 方式三：密碼持久化設定（ENV）

透過 `PERSIST_PASSWORD` 環境變數，你可以控制用戶在輸入正確密碼後，是否需要在下次打開時重新輸入。

| 變數名 | 選項 | 說明 | 預設值 |
|--------|------|------|--------|
| `PERSIST_PASSWORD` | `true` / `false` | 是否在本地瀏覽器持久化儲存解鎖狀態。設定為 `true` 時，用戶只需輸入一次密碼，後續存取無需再次輸入。 | `true` |

> [!NOTE]
> 此功能仅在设置了 `ACCESS_PASSWORD` 时才会生效。如果没有设置环境密码，此选项将被忽略。

## 🎨 站台名稱自定義配置

透過環境變數可以自定義站台名稱、標題和描述，無需修改原始碼。

### 可用環境變數：

| 變數名 | 說明 | 預設值 |
|--------|------|--------|
| `NEXT_PUBLIC_SITE_TITLE` | 瀏覽器標籤頁標題 | `影片整合平台 - Woody TV` |
| `NEXT_PUBLIC_SITE_DESCRIPTION` | 站台描述 | `專屬影片整合播放平台，具備美觀的 Liquid Glass UI` |
| `NEXT_PUBLIC_SITE_NAME` | 站台頂部名稱 | `影片整合平台` |
| `PERSIST_PASSWORD` | 密碼持久化 | `true` |

### 配置範例：

**Vercel 部署：**
在 Vercel 專案設定中新增環境變數：

- 變數名：`NEXT_PUBLIC_SITE_NAME`
- 變數值：`我的影片平台`

**Cloudflare Pages 部署：**
在 Cloudflare Pages 專案設定中新增環境變數：
- 變數名：`NEXT_PUBLIC_SITE_NAME`
- 變數值：`我的影片平台`

**Docker 部署：**
```bash
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_NAME="我的影片平台" \
  -e NEXT_PUBLIC_SITE_TITLE="我的影片 - 整合播放平台" \
  -e NEXT_PUBLIC_SITE_DESCRIPTION="專屬影片整合播放平台" \
  --name woody-tv woody-tv:latest
```

**本地開發：**
在專案根目錄建立 `.env.local` 檔案：
```env
NEXT_PUBLIC_SITE_NAME=我的影片平台
NEXT_PUBLIC_SITE_TITLE=我的影片 - 整合播放平台
NEXT_PUBLIC_SITE_DESCRIPTION=專屬影片整合播放平台
```

## 📦 自動訂閱源配置

可以透過環境變數 `NEXT_PUBLIC_SUBSCRIPTION_SOURCES` 自動配置訂閱源，應用啟動時會自動載入並設定為自動更新。

**格式：** JSON 陣列字串，包含 `name` 和 `url` 欄位。

**範例：**

```bash
NEXT_PUBLIC_SUBSCRIPTION_SOURCES='[{"name":"每日更新源","url":"https://example.com/api.json"},{"name":"備用源","url":"https://backup.com/api.json"}]'
```

**Docker 部署：**

```bash
docker run -d -p 3000:3000 -e NEXT_PUBLIC_SUBSCRIPTION_SOURCES='[{"name":"MySource","url":"..."}]' --name woody-tv woody-tv:latest
```

**Vercel 部署：**

在 Vercel 專案設定中新增環境變數：
- 變數名：`NEXT_PUBLIC_SUBSCRIPTION_SOURCES`
- 變數值：`[{"name":"...","url":"..."}]`

**Cloudflare Pages 部署：**

泛在 Cloudflare Pages 專案設定中新增環境變數：
- 變數名：`NEXT_PUBLIC_SUBSCRIPTION_SOURCES`
- 變數值：`[{"name":"...","url":"..."}]`

## 📝 自定義源 JSON 格式

如果你想建立自己的訂閱源或批次導入源，可以使用以下 JSON 格式。

**基本結構：**

可以是單個物件陣列，也可以是包含 `sources` 或 `list` 欄位的物件。

**源物件欄位說明：**

| 欄位 | 類型 | 必填 | 說明 |
|------|------|------|------|
| `id` | string | 是 | 唯一識別碼，建議使用英文 |
| `name` | string | 是 | 顯示名稱 |
| `baseUrl` | string | 是 | API 地址 (例如: `https://example.com/api.php/provide/vod`) |
| `group` | string | 否 | 分組，可選值: `"normal"` (預設) 或 `"premium"` |
| `enabled` | boolean | 否 | 是否啟用，預設為 `true` |
| `priority` | number | 否 | 優先級，數字越小優先度越高，預設為 1 |

**範例 JSON：**

```json
[
  {
    "id": "my_source_1",
    "name": "我的精選源",
    "baseUrl": "https://api.example.com/vod",
    "group": "normal",
    "priority": 1
  },
  {
    "id": "premium_source_1",
    "name": "特殊資源",
    "baseUrl": "https://api.premium-source.com/vod",
    "group": "premium",
    "enabled": true
  }
]
```

### ⚠️ 重要的区别说明：订阅源 vs 视频源

**这是一个常见的误区，请仔细阅读：**

- **视频源 (Source)**：
  - 指向单个 CMS/App API 接口
  - 例如：`https://api.example.com/vod`
  - 这种链接**不能**直接作为"订阅"添加
  - 只能在"自定义源管理"中作为单个源添加

- **订阅源 (Subscription)**：
  - 指向一个 **JSON 文件**（如上面的示例）的 URL
  - 这个 JSON 文件里包含了一个或多个视频源的列表
  - 例如：`https://mysite.com/woody-tv-sources.json`
  - 这是一个**配置文件**的链接，不是视频 API 的链接
  - 只有这种返回 JSON 列表的链接才能在"订阅管理"中添加

> **简单来说**：如果你只有一个 m3u8 或 API 接口地址，请去"自定义源"添加。如果你有一个包含多个源的 JSON 文件链接，请去"订阅管理"添加。

## 🛠 技術棧

### 前端核心

| 技術 | 版本 | 用途 |
|------|------|------|
| **[Next.js](https://nextjs.org/)** | 16.4.6 | React 框架，使用 App Router |
| **[React](https://react.dev/)** | 19.2.0 | UI 元件庫 |
| **[TypeScript](https://www.typescriptlang.org/)** | 5.x | 型別安全的 JavaScript |
| **[Tailwind CSS](https://tailwindcss.com/)** | 4.x | 實用優先的 CSS 框架 |
| **[Zustand](https://github.com/pmndrs/zustand)** | 5.0.2 | 輕量級狀態管理 |

### 开发工具

- **ESLint 9**：代码质量检查
- **PostCSS 8**：CSS 处理器
- **Vercel Analytics**：性能监控和分析

### 架构特点

- **App Router**：Next.js 13+ 的新路由系统，支持服务端组件和流式渲染
- **API Routes**：内置 API 端点，处理豆瓣数据和视频源代理
- **Service Worker**：离线缓存和智能预加载
- **Server Components**：优化首屏加载性能
- **Client Components**：复杂交互和状态管理

## 🚀 快速部署

### 線上體驗

存取 **[https://woodytv.vercel.app/](https://woodytv.vercel.app/)** 立即體驗，無需安裝！

### 部署到自己的伺服器

#### 選項 1：Vercel 一鍵部署（推薦）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/woodywoody40/KVideo)

1. 點擊上方按鈕
2. 連接你的 GitHub 帳號
3. Vercel 會自動檢測 Next.js 專案並部署
4. 幾分鐘後即可存取你自己的 Woody TV 實例

#### 選項 2：Cloudflare Pages 部署 (推薦)

此方法完全免費且速度極快，是部署本專案的最佳選擇。

1. **Fork 本倉庫**：首先將專案 Fork 到你的 GitHub 帳戶。

2. **建立專案**：
   - 點擊存取 [**Cloudflare Pages - Connect Git**](https://dash.cloudflare.com/?to=/:account/pages/new/provider/github)。
   - 如果未連接 GitHub，請點擊 **Connect GitHub**；若已連接，直接選擇你剛才 Fork 的 Woody TV 專案並點擊 **Begin setup**。

3. **配置構建參數**：
   - **Project name**: 可填 `woody-tv`（下方連結以此為例）
   - **Framework Preset**: 選擇 `Next.js`
   - **Build command**: 輸入 `npm run pages:build`
   - **Build output directory**: 輸入 `.vercel/output/static`
   - 點擊 **Save and Deploy**。

4. **⚠️ 關鍵步驟：修復執行階段環境**
   > *注意：此時部署雖然顯示"Success"，但你會發現存取網頁會報錯。這是因為缺少必要的相容性配置。請按以下步驟修復：*

   - 進入 **[專案設定頁面](https://dash.cloudflare.com/?to=/:account/pages/view/woody-tv/settings/production)** (如果你的專案名不是 woody-tv，請在控制台手動查找 Settings -> Functions)。
   - 拉到頁面底部找到 **Compatibility flags** 部分。
   - 新增標誌：`nodejs_compat`

5. **重試部署 (生效配置)**：
   - 回到 **[專案概覽頁面](https://dash.cloudflare.com/?to=/:account/pages/view/woody-tv)**。
   - 在 **Deployments** 列表中，找到最新那次部署。
   - 點擊右側的三個點 `...` 選單，選擇 **Retry deployment**。
   - 等待新的部署完成後，你的 Woody TV 就部署成功了！

#### 選項 3：Docker 部署

**自己建構映像檔：**

```bash
git clone https://github.com/woodywoody40/KVideo.git woody-tv
cd woody-tv
docker build -t woody-tv .
docker run -d -p 3000:3000 --name woody-tv woody-tv
```

**使用 Docker Compose：**

```bash
docker-compose up -d
```

#### 選項 4：傳統 Node.js 部署

```bash
# 1. 克隆倉庫
git clone https://github.com/woodywoody40/KVideo.git woody-tv
cd woody-tv

# 2. 安裝依賴
npm install

# 3. 建構專案
npm run build

# 4. 啟動生產伺服器
npm start
```

應用將在 `http://localhost:3000` 啟動。

## 🔄 如何更新

### Vercel 部署

Vercel 會自動檢測 GitHub 倉庫的更新並重新部署，無需手動操作。

### Docker 部署

當有新版本釋出時：

```bash
# 停止并删除旧容器
docker stop woody-tv
docker rm woody-tv

# 在專案目錄更新並重新建構映像檔
git pull --ff-only origin main
docker build -t woody-tv:latest .

# 运行新容器
docker run -d -p 3000:3000 --name woody-tv woody-tv:latest
```

### Node.js 部署

```bash
cd woody-tv
git pull origin main
npm install
npm run build
npm start
```


## 🤝 贡献代码

我们非常欢迎各种形式的贡献！无论是报告 Bug、提出新功能建议、改进文档，还是提交代码，你的每一份贡献都让这个项目变得更好。

**想要参与开发？请查看 [贡献指南](CONTRIBUTING.md) 了解详细的开发规范和流程。**

快速开始：
1. **报告 Bug**：[提交上游 Issue](https://github.com/KuekHaoYang/KVideo/issues)
2. **功能建议**：在 Issues 中提出你的想法
3. **代码贡献**：Fork → Branch → PR
4. **文档改进**：直接提交 PR

## 📄 许可证

本项目基于 [MIT 许可证](LICENSE) 开源。

## 🙏 致谢

感谢以下开源项目：

- [Next.js](https://nextjs.org/) - React 框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Zustand](https://github.com/pmndrs/zustand) - 状态管理
- [React](https://react.dev/) - UI 库

## 📞 联系方式

- **原作者**：[KuekHaoYang](https://github.com/KuekHaoYang)
- **Woody TV 專案主頁**：[Woody TV](https://github.com/woodywoody40/KVideo)
- **问题反馈**：[上游 GitHub Issues](https://github.com/KuekHaoYang/KVideo/issues)





---

<div align="center">
  Made with ❤️ by <a href="https://github.com/KuekHaoYang">KuekHaoYang</a>
  <br>
  如果这个项目对你有帮助，请考虑给一个 ⭐️
</div>

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=woodywoody40/KVideo&type=date&legend=top-left)](https://www.star-history.com/#woodywoody40/KVideo&type=date&legend=top-left)