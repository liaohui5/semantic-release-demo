/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  // 在哪些 git 分支上进行 release,
  // 注意配合 Github Actions workflow 使用
  branches: ["main", "next"],

  // 插件配置: 默认有内置的 4 个插件, 不需要手动安装
  // commit-analyzer release-notes-generator npm github
  plugins: [
    // 1.分析 commit 信息(请注意git提交规范 https://semver.org)
    // https://github.com/semantic-release/commit-analyzer
    "@semantic-release/commit-analyzer",

    // 2.根据提交历史生成 release notes 说明
    // https://github.com/semantic-release/release-notes-generator
    "@semantic-release/release-notes-generator",

    // 3.自动生成或更新 CHANGELOG.md 文件, 记录每个版本的变更内容
    // 注意这个插件不是必须的, 它需要手动安装
    // https://github.com/semantic-release/changelog
    ["@semantic-release/changelog", { changelogFile: "./CHANGELOG.md" }],

    // 4.自动更新 package.json 中的 version 字段, 并支持发布到 npm 仓库
    // https://github.com/semantic-release/npm
    [
      "@semantic-release/npm",
      {
        // 仅修改 package.json 的 version 字段, 不要发布到 npm 仓库
        npmPublish: false,
      },
    ],

    // 5.自动生成 git commit 并提交(assets: 指定哪些文件需要更新&提交)
    // 注意这个插件不是必须的, 它需要手动安装
    // https://github.com/semantic-release/git
    [
      "@semantic-release/git",
      {
        // assets: ["package.json", "CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version} [skip ci]",
      },
    ],

    // 6.在 GitHub 上创建 Release 和 Tag, 并将 Release Notes 作为正文内容
    // https://github.com/semantic-release/github
    "@semantic-release/github",
  ],
};
