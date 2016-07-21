/**
 * Created by zhangxu on 2016/7/21.
 */

    (function (win,doc,$) {
        var CusScrollBar=function(options){
            this._init(options); // index调用CusScrollBar 时，this.init(options)会执行
            this._initDomEvent()

        };
        $.extend(CusScrollBar.prototype,{ //理解：两个对象合并，后一个对象属性合并到前一个对象属性中 // 方法里面写方法，对象里面字面量
            _init: function (options) {
                var self=this;
                self.options={  //为什么不是字面量创建，直接写方法。
                    scrollDir:"y",
                    contSelector:"",
                    barSelector:"",
                    sliderSelector:""
                };
                /*self.nihao={}*/
                $.extend(true,self.options,options||{})

            },
            _initDomEvent: function () {
                var opts=this.options;
                this.$cont=$(opts.contSelector);
                this.$slider=$(opts.sliderSelector);
                this.bar=opts.barSelector?$(opts.barSelector) : self.$slider.parent();
                this.$doc=$(doc);
                this._initSliderDragEvent();
            },
            _initSliderDragEvent: function () {

                var slider=this.$slider,
                    sliderEl=slider[0];

                if(sliderEl){
                    var doc=this.$doc,
                        dragStartPagePosition,
                        dragStartScrollPagePosition,
                        dragContBarRate;

                    slider.on("mousedown", function (e) {

                        console.log(11)
                    }).on("mousemove", function () {

                    }).on("mouseup",function(){
                        // on的命名空间
                    })


                }
            }


        });
        /*CusScrollBar.prototype._init= function () {
            console.log("test");
        };*/
        window.CusScrollBar=CusScrollBar;  //为什么不是$(window)
    })(window,document,jQuery);
