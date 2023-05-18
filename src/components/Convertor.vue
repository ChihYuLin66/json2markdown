<script setup>
import {ref, watch} from "vue";

const json = ref('');
const markdown = ref('');
const table = ref('');

const json2markdown = (json) => {

}

const json2table = (json) => {

}

const markdown2json = (markdown) => {

}

const table2json = (table) => {

}

watch(json, (newValue, oldValue) => {

    // let data =

    


});
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4 custom-column">
                <h2>JSON</h2>
                <div id="jsonContent">
                    <textarea class="form-control" rows="25" v-model="json"></textarea>
                </div>
            </div>
            <div class="col-md-4 custom-column">
                <h2>Markdown</h2>
                <div id="markdownContent">
                    <textarea class="form-control" rows="25" v-model="markdown"></textarea>
                </div>
            </div>
            <div class="col-md-4 custom-column">
                <h2>Table</h2>
                <div id="tableContent">
                    <textarea class="form-control" rows="25" v-model="table"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.custom-column {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  padding: 20px;
}
</style>
