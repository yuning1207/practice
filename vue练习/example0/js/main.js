window.vm = new Vue({
    el: "#app",
    data: {
        title: "hello vue",
        list: [],
        checkAll: false,
        totalMoney: 0,
        currenProduct: '',
        showModal: false,
    },
    //局部过滤器
    filters: {
        formatMoney: function(value, quentity) {
            if (!quentity) quentity = 1;
            return "¥ " + (value * quentity).toFixed(2) + "元";
        }
    },
    ready: function() {
        this.change();
    },
    methods: {
        change: function() {

            //this.title = "vue hello";
            this.$http.get('data/cartData.json').then(res => {
                    this.list = res.body.result.list;
                    this.calcTotalMoney();
                    //alert(1);
                })
                //箭头函数的this指向外层
        },
        changemoney: function(item, flag) {
            if (flag > 0) {
                item.productQuentity++;
            } else {
                if (item.productQuentity <= 1) {
                    item.productQuentity = 1;
                } else {
                    item.productQuentity--;
                }
            }
            this.calcTotalMoney();
        },
        //单选
        selectProduct: function(product) {
            if (typeof product.checked == 'undefined') {
                this.$set(product, "checked", true)
            } else {
                product.checked = !product.checked;
            }
            this.calcTotalMoney();
        },
        //全选
        selectAll: function(flag) {
            this.checkAll = flag;
            this.list.forEach(function(item) {
                if (typeof item.checked == 'undefined') {
                    this.$set(item, "checked", flag)
                } else {
                    item.checked = flag;;
                }
            })
            this.calcTotalMoney();
        },
        //同步总额
        calcTotalMoney: function() {
            let totalMoney = 0;
            this.list.forEach(function(item) {
                if (item.checked) {
                    totalMoney += item.productPrice * productQuentity;
                }
            });
            this.totalMoney = totalMoney;
        },
        //点击垃圾箱后
        delConfirm: function(product) {
            this.currenProduct = product;
            this, showModal = true;
        },
        //删除选中项
        delCurrentProduct: function() {
            this.showModal = false;
            let index = this.list.indexof(this.currenProduct);
            this.list.splice(index, 1);
        }
    }
});
//全局过滤器
Vue.filter('money', function(value, type) {
    return '￥ ' + value.toFixed(2) + type;
})