import template from './template.pug';
import './style.scss';
export default {
    data(){
        return {
            file: null,
            updateCount: 0
        }
    },
    methods: {
        fileChange(){
            this.updateCount++;
            //this.file = this.file;
        }
    },
    props: {
        pic: {
            type: String,
            default: 'https://www.dropbox.com/s/6dpq6av9wfeqoxo/flow.png?raw=1'
        }
    },
    computed: {
        thumb(){
            const putUrl = (file)=>`url("${file}")`;
            if( this.file !== null ){
                return putUrl(URL.createObjectURL(this.file));
                //return `'data:${this.file.type};base64,'${URL.createObjectURL(this.file)}`;
            }
            else{
                return putUrl(this.pic);
            }
        }
    },
    render: template.render
}