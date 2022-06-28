import { AssetInfo } from "../@types/packages/asset-db/@types/public";
import fs from 'fs';
import path from 'path';
const packageName = "mvc_tool";
export function onDBMenu(assetInfo: AssetInfo) {
  return [
    {
      label: 'i18n:MVC目录生成器',
      submenu: [
        {
          label: 'i18n:生成MVC目录',
          enabled: assetInfo.isDirectory,
          click() {
            var url = Editor.Package.getPath(packageName)+'/init_page.zip'
            var target  = Editor.Project.path+"/assets";
            Editor.Utils.File.unzip(url,target);
          },
        },
        {
          label: 'i18n:生成UI代码',
          enabled: !assetInfo.isDirectory,
          click() {
            console.log(Editor.Project.path)
             var fileName = Editor.Utils.Path.basenameNoExt(assetInfo.name);
             var contrName = fileName.replace(fileName[0],fileName[0].toUpperCase())
             var fileName = contrName+"Controller.ts";
             var to_url = assetInfo.file.split("assets")[0]+"assets/script/game/controller/"+fileName;
                        // 读取⽂件
                         fs.readFile(Editor.Package.getPath(packageName)+'/tempController.text', 'utf8',(err,data)=>{
                          if(err){
                              console.log(err)
                          }else{
                              var modelData  = data.replace(/Demo/g,contrName);
                              fs.writeFile(to_url,modelData, {flag:'w'},(err) =>{
                                  if(err){
                                      console.log(err)
                                  }else{
                                  }
                              })
                          }
                      })
          },
        },
      ],
    },
  ];
} 
  export function onAssetMenu(assetInfo: AssetInfo) {
    return [
      {
        label: 'i18n:MVC目录生成器',
        submenu: [
          {
            label: 'i18n:生成MVC目录',
            enabled: assetInfo.isDirectory,
            click() {
              var url = Editor.Package.getPath(packageName)+'/init_page.zip'
              var target  = Editor.Project.path+"/assets";
              Editor.Utils.File.unzip(url,target);
            },
          },
          {
            label: 'i18n:生成UI代码',
            enabled: !assetInfo.isDirectory,
            click() {
              console.log(Editor.Project.path)
               var fileName = Editor.Utils.Path.basenameNoExt(assetInfo.name);
               var contrName = fileName.replace(fileName[0],fileName[0].toUpperCase())
               var fileName = contrName+"Controller.ts";
               var to_url = assetInfo.file.split("assets")[0]+"assets/script/game/controller/"+fileName;
                          // 读取⽂件
                           fs.readFile(Editor.Package.getPath(packageName)+'/tempController.text', 'utf8',(err,data)=>{
                            if(err){
                                console.log(err)
                            }else{
                                var modelData  = data.replace(/Demo/g,contrName);
                                fs.writeFile(to_url,modelData, {flag:'w'},(err) =>{
                                    if(err){
                                        console.log(err)
                                    }else{
                                    }
                                })
                            }
                        })
            },
          },
        ],
      },
    ];
  };