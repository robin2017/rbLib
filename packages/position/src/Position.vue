<template>
    <section class="Position">
        <div class="longitude wrapper" v-if="part==='jd'||part==='jwd'">
            <span class="title" v-if="!hideHeader">经度</span>
            <el-input v-model="lng_deg" placeholder="0" :disabled="disabled"></el-input>
            <span class="degree unit">度</span>
            <el-input v-model="lng_min" placeholder="0" :disabled="disabled"></el-input>
            <span class="minute unit">分</span>
            <el-input v-model="lng_sec" placeholder="0" :disabled="disabled"></el-input>
            <span class="second unit">秒</span>
        </div>
        <div class="latitude wrapper" v-if="part==='wd'||part==='jwd'">
            <span class="title" v-if="!hideHeader">纬度</span>
            <el-input v-model="lat_deg" placeholder="0" :disabled="disabled"></el-input>
            <span class="degree unit">度</span>
            <el-input v-model="lat_min" placeholder="0" :disabled="disabled"></el-input>
            <span class="minute unit">分</span>
            <el-input v-model="lat_sec" placeholder="0" :disabled="disabled"></el-input>
            <span class="second unit">秒</span>
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

    function parseToInt(str){
        return isNaN(parseInt(str))?0:parseInt(str);
    }

    export default {
        name: "Position",
        props: {},
        data: function () {
            return {}
        },
        computed: {},
        watch: {},
        methods: {},
        mounted() {
        }
    }
</script>

<style>
    .Position {
    }
</style>