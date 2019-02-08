<template>
    <section class="Position">
        <div class="longitude wrapper" v-if="part==='jd'||part==='jwd'">
            <span class="title" v-if="!hideHeader">经度</span>
            <el-input v-model="lng_deg" placeholder="0" :disabled="disabled"></el-input>
            <span class="degree unit" v-if="unitChn">度</span>
            <span class="degree unit" v-else>°</span>
            <el-input v-model="lng_min" placeholder="0" :disabled="disabled"></el-input>
            <span class="minute unit" v-if="unitChn">分</span>
            <span class="minute unit" v-else>'</span>
            <el-input v-model="lng_sec" placeholder="0" :disabled="disabled"></el-input>
            <span class="second unit" v-if="unitChn">秒</span>
            <span class="second unit" v-else>"</span>
        </div>
        <div class="latitude wrapper" v-if="part==='wd'||part==='jwd'">
            <span class="title" v-if="!hideHeader">纬度</span>
            <el-input v-model="lat_deg" placeholder="0" :disabled="disabled"></el-input>
            <span class="degree unit" v-if="unitChn">度</span>
            <span class="degree unit" v-else>°</span>
            <el-input v-model="lat_min" placeholder="0" :disabled="disabled"></el-input>
            <span class="minute unit" v-if="unitChn">分</span>
            <span class="minute unit" v-else>'</span>
            <el-input v-model="lat_sec" placeholder="0" :disabled="disabled"></el-input>
            <span class="second unit" v-if="unitChn">秒</span>
            <span class="second unit" v-else>"</span>
        </div>
    </section>
</template>

<script>
    /**
     * 验证字符串在某个范围内
     * @param string
     * @return string
     * */
    function validateNum(val, minVal, maxVal) {
        let v = parseInt(val);
        if (isNaN(v)) {
            return "0";
        }
        if (v < minVal) return minVal + "";
        if (v > maxVal) return maxVal + "";
        return v + "";
    }

    /**
     * 数值转化为度分秒
     * @param number
     * @return array
     * */
    function parseNumberToArray(num) {
        let deg = Math.floor(num);
        let min = Math.floor((num - deg) * 60);
        let sec = Math.round((num - deg) * 3600 % 60);
        if (sec === 60) {
            min += 1;
            sec = 0;
        }
        if (min === 60) {
            deg += 1;
            min = 0;
        }
        return [(deg || 0) + "", (min || 0) + "", (sec || 0) + ""]
    }

    function parseToInt(str) {
        return isNaN(parseInt(str)) ? 0 : parseInt(str);
    }

    function parseArrayToNumber(arr) {
        let [deg, min, sec] = arr;
        return parseToInt(deg) + parseToInt(min) / 60 + parseToInt(sec) / 3600;
    }

    const reg = /(\d+)\D*(\d*)\D*(\d*)/;

    function parseStringToArray(str) {
        console.log('parse input:',str)
        reg.test(str);
        let ret = [RegExp.$1 || "0", RegExp.$2 || "0", RegExp.$3 || "0",]
        console.log('parse output:',ret);
        return ret;
    }

    export default {
        name: "RbPosition",
        props: {
            value: {type: Array, default: () => [0, 0]},
            formatInput: {default: 'number', type: String},
            formatOutput: {default: 'number', type: String},
            disabled: {default: false, type: Boolean},
            part: {default: 'jwd', type: String},
            hideHeader: {default: false, type: Boolean},
            unitChn: {default: false, type: Boolean}
        },
        data: function () {
            return {
                //保证父组件传过来的值不会再传给父组件，造成环
                lock: false,
                lng_deg: '',
                lng_min: '',
                lng_sec: '',
                lat_deg: '',
                lat_min: '',
                lat_sec: ''
            }
        },
        computed: {},
        watch: {
            // formatInput: function () {
            //     this.translateValue(this.handleError)
            // },
            formatOutput: function () {
                this.translateValue(this.handleError)
            },
            value: function () {
                this.translateValue(this.handleError)
            },
            lng_deg: function (newValue, oldValue) {
                this.handleChange(newValue, oldValue, 'lng_deg')
            },
            lng_min: function (newValue, oldValue) {
                this.handleChange(newValue, oldValue, 'lng_min')
            },
            lng_sec: function (newValue, oldValue) {
                this.handleChange(newValue, oldValue, 'lng_sec')
            },
            lat_deg: function (newValue, oldValue) {
                this.handleChange(newValue, oldValue, 'lat_deg')
            },
            lat_min: function (newValue, oldValue) {
                this.handleChange(newValue, oldValue, 'lat_min')
            },
            lat_sec: function (newValue, oldValue) {
                this.handleChange(newValue, oldValue, 'lat_sec')
            },
        },
        methods: {
            handleChange: function (newValue, oldValue, label) {
                //js单线程机制保证不会出现紊乱
                if (this.lock) {
                    return
                }
                if (newValue !== oldValue) {

                    if (label.indexOf('deg') !== -1) {
                        this.$nextTick(() => {
                            this[label] = validateNum(newValue, -179, 179)
                        })
                    } else {
                        this.$nextTick(() => {
                            this[label] = validateNum(newValue, 0, 59)
                        })
                    }
                    this.$nextTick(() => {
                        this.$emit('input', this.combinationValue())
                    })
                }
            },
            combinationValue: function () {
                if (this.formatOutput === 'string') {
                    return [`${this.lng_deg}.${this.lng_min}.${this.lng_sec}`,
                        `${this.lat_deg}.${this.lat_min}.${this.lat_sec}`]
                } else if (this.formatOutput === 'number') {
                    return [parseArrayToNumber([this.lng_deg, this.lng_min, this.lng_sec]),
                        parseArrayToNumber([this.lat_deg, this.lat_min, this.lat_sec])]
                }
            },
            translateValue: function (cb) {
                this.lock = true;
                this.$nextTick(() => {
                    this.lock = false;
                });
                if (this.value.length !== 2) {
                    return cb(new Error('数组长度不为2！'));
                }
                if (typeof this.value[0] !== this.formatInput
                    || typeof this.value[1] !== this.formatInput) {
                    return cb(new Error('数组元素类型不匹配！'))
                }
                if (this.formatInput === 'string') {
                    //这里先赋值给临时变量
                    let arr1 = parseStringToArray(this.value[0]);
                    [this.lng_deg, this.lng_min, this.lng_sec] = arr1;
                    let arr2 = parseStringToArray(this.value[1]);
                    [this.lat_deg, this.lat_min, this.lat_sec] = arr2;
                } else if (this.formatInput === 'number') {
                    let arr1 = parseNumberToArray(this.value[0]);
                    [this.lng_deg, this.lng_min, this.lng_sec] = arr1;
                    let arr2 = parseNumberToArray(this.value[1]);
                    [this.lat_deg, this.lat_min, this.lat_sec] = arr2;
                }
            },
            handleError(error) {
                this.$message(error.message)
            }
        },
        mounted() {
            this.translateValue(this.handleError)
        }
    }
</script>

<style lang="less">
    .Position {
        font-size: 14px;
        .wrapper {
            padding: 1px;
            margin: 5px;
            border-radius: 6px;
            .el-input {
                width: 60px;
            }
        }
    }
</style>