<template>
    <div class="c-cursor">
        <div id="cursor" :class="{'pointer' : cursor_pointer}"></div>
    </div>
</template>

<script>
    export default {
        name: "cCursor",
        data() {
            return {
                cursor_pointer: false,
            }
        },
        mounted() {
            let cursor = document.getElementById('cursor');
            cursor.style.height = 10 + 'px';
            cursor.style.width = 10 + 'px';
            document.addEventListener( 'mousemove', (e) => {
                cursor.style.top = e.clientY - (parseInt(cursor.style.height) / 2) + 'px'
                cursor.style.left = e.clientX - (parseInt(cursor.style.width) / 2) + 'px'
            })
            let pointer = document.getElementsByClassName('cursor-pointer');
            for (let i = 0; i < pointer.length; i++) {
                pointer[i].addEventListener( 'mouseover', () => {
                    this.cursor_pointer = true
                })
                pointer[i].addEventListener( 'mouseleave', () => {
                    this.cursor_pointer = false
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .c-cursor{
        position: fixed;
        z-index: 1000;
        pointer-events: none;
        overflow: visible;
        #cursor{
            position: absolute;
            top: -10px;
            left: -10px;
            background-color: rgba(23, 202, 255, 0.61);
            border-radius: 50%;
            &.pointer{
                transform: scale(3);
            }
        }
    }
</style>