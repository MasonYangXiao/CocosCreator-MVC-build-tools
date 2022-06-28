"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onAssetMenu = exports.onDBMenu = void 0;
const fs_1 = __importDefault(require("fs"));
const packageName = "mvc_tool";
function onDBMenu(assetInfo) {
    return [
        {
            label: 'i18n:MVC目录生成器',
            submenu: [
                {
                    label: 'i18n:生成MVC目录',
                    enabled: assetInfo.isDirectory,
                    click() {
                        var url = Editor.Package.getPath(packageName) + '/init_page.zip';
                        var target = Editor.Project.path + "/assets";
                        Editor.Utils.File.unzip(url, target);
                    },
                },
                {
                    label: 'i18n:生成UI代码',
                    enabled: !assetInfo.isDirectory,
                    click() {
                        console.log(Editor.Project.path);
                        var fileName = Editor.Utils.Path.basenameNoExt(assetInfo.name);
                        var contrName = fileName.replace(fileName[0], fileName[0].toUpperCase());
                        var fileName = contrName + "Controller.ts";
                        var to_url = assetInfo.file.split("assets")[0] + "assets/script/game/controller/" + fileName;
                        // 读取⽂件
                        fs_1.default.readFile(Editor.Package.getPath(packageName) + '/tempController.text', 'utf8', (err, data) => {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                var modelData = data.replace(/Demo/g, contrName);
                                fs_1.default.writeFile(to_url, modelData, { flag: 'w' }, (err) => {
                                    if (err) {
                                        console.log(err);
                                    }
                                    else {
                                    }
                                });
                            }
                        });
                    },
                },
            ],
        },
    ];
}
exports.onDBMenu = onDBMenu;
function onAssetMenu(assetInfo) {
    return [
        {
            label: 'i18n:MVC目录生成器',
            submenu: [
                {
                    label: 'i18n:生成MVC目录',
                    enabled: assetInfo.isDirectory,
                    click() {
                        var url = Editor.Package.getPath(packageName) + '/init_page.zip';
                        var target = Editor.Project.path + "/assets";
                        Editor.Utils.File.unzip(url, target);
                    },
                },
                {
                    label: 'i18n:生成UI代码',
                    enabled: !assetInfo.isDirectory,
                    click() {
                        console.log(Editor.Project.path);
                        var fileName = Editor.Utils.Path.basenameNoExt(assetInfo.name);
                        var contrName = fileName.replace(fileName[0], fileName[0].toUpperCase());
                        var fileName = contrName + "Controller.ts";
                        var to_url = assetInfo.file.split("assets")[0] + "assets/script/game/controller/" + fileName;
                        // 读取⽂件
                        fs_1.default.readFile(Editor.Package.getPath(packageName) + '/tempController.text', 'utf8', (err, data) => {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                var modelData = data.replace(/Demo/g, contrName);
                                fs_1.default.writeFile(to_url, modelData, { flag: 'w' }, (err) => {
                                    if (err) {
                                        console.log(err);
                                    }
                                    else {
                                    }
                                });
                            }
                        });
                    },
                },
            ],
        },
    ];
}
exports.onAssetMenu = onAssetMenu;
;
