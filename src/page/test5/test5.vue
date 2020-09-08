<template>
  <table>
    <tr>
      <td>选择导入数据源：</td>
      <td><input id="path" type="text" name="path" size="30" :value="path"></td>
      <td><el-button type="primary" value="选择" @click="browseFolder"></el-button></td>
    </tr>
  </table>
</template>

<script>
// function browseFolder(path) {
//     try {
//         var Message = "\u8bf7\u9009\u62e9\u6587\u4ef6\u5939"; //选择框提示信息
//         var Shell = new ActiveXObject("Shell.Application");
//         var Folder = Shell.BrowseForFolder(0, Message, 64, 17); //起始目录为：我的电脑
//         //var Folder = Shell.BrowseForFolder(0, Message, 0); //起始目录为：桌面
//         if (Folder != null) {
//             Folder = Folder.items(); // 返回 FolderItems 对象
//             Folder = Folder.item(); // 返回 Folderitem 对象
//             Folder = Folder.Path; // 返回路径
//             if (Folder.charAt(Folder.length - 1) != "\\") {
//                 Folder = Folder + "\\";
//             }
//             document.getElementById(path).value = Folder;
//             return Folder;
//         }
//     }
//     catch (e) {
//         alert(e.message);
//     }
// }
  export default{
    data(){
      return{
        path:''
      }
    },
    mounted(){
    },
    methods:{
       browseFolder(){
             console.log("yes")
             var Message = "\u8bf7\u9009\u62e9\u6587\u4ef6\u5939"; //选择框提示信息
             var Shell = new ActiveXObject("Shell.Application");
             var Folder = Shell.BrowseForFolder(0, Message, 64, 17); //起始目录为：我的电脑
             //var Folder = Shell.BrowseForFolder(0, Message, 0); //起始目录为：桌面
             if (Folder != null) {
                 Folder = Folder.items(); // 返回 FolderItems 对象
                 Folder = Folder.item(); // 返回 Folderitem 对象
                 Folder = Folder.Path; // 返回路径
                 if (Folder.charAt(Folder.length - 1) != "\\") {
                     Folder = Folder + "\\";
                 }
                 this.path = Folder;
                 return Folder;
             }
       }
    },
  }
</script>

<style>
</style>
