var app = new Vue({
    el: "#app",
    data: {
        inputValue: "",
        list: [],
        inputCheckbox: "",
        listNumber: '0',
        CompletedList: [],
        CompletedListNumber: "0"
    },
    mounted() {
        // 从本地获取数据
        if (sessionStorage.getItem("list")) {
            this.list = JSON.parse(sessionStorage.getItem("list"));
        };
        if (sessionStorage.getItem("CompletedList")) {
            this.CompletedList = JSON.parse(sessionStorage.getItem("CompletedList"))
        };
        if (sessionStorage.getItem("listNumber")) {
            this.listNumber = JSON.parse(sessionStorage.getItem("listNumber"))
        };
        if (sessionStorage.getItem("CompletedListNumber")) {
            this.CompletedListNumber = JSON.parse(sessionStorage.getItem("CompletedListNumber"))
        }
    },
    watch: {

        // 从本地获取的数据，存储一下
        list() {
            sessionStorage.setItem('list', JSON.stringify(this.list));

        },
        CompletedList() {
            sessionStorage.setItem('CompletedList', JSON.stringify(this.CompletedList));
        },
        listNumber() {
            sessionStorage.setItem("listNumber", JSON.stringify(this.listNumber));
        },
        CompletedListNumber() {
            sessionStorage.setItem("CompletedListNumber", JSON.stringify(this.CompletedListNumber))
        }
    },
    methods: {
        // 待办事项(点击提交事件)
        changeContent() {
            if (this.inputValue == "") {
                return;
            }
            this.list.push(this.inputValue);
            this.inputValue = "";
            this.listNumber = this.list.length;
        },
        // 已办事项(点击代办的多选按钮事件)
        CompletedChangeContent(index) {
            //点击待办事项，已办事项增加
            let listSlice = this.list.slice(index, index + 1)
            this.CompletedList.push(String(listSlice));
            this.CompletedListNumber = this.CompletedList.length;
            this.inputCheckbox = true;
            //重新赋值待办事项
            this.list.splice(index, 1);
            this.listNumber = this.list.length;
        },
        // 删除已办事项
        deleteCompletedList(index) {
            this.CompletedList.splice(index, 1);
            this.CompletedListNumber = this.CompletedList.length;
        }
    }
})