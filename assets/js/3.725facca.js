(window.webpackJsonp=window.webpackJsonp||[]).push([[3,5],{164:function(t,n,e){},170:function(t,n,e){"use strict";var i=e(164);e.n(i).a},172:function(t,n,e){},183:function(t,n,e){"use strict";e.r(n);var i=e(173),s=e.n(i),r=e(182),a=e.n(r),o={props:{content:{default:"",type:String},inline:{default:!1,type:Boolean}},mounted:function(){var t,n=(new s.a).use(a.a);t=this.inline?n.renderInline(this.content):n.render(this.content),this.$el.innerHTML=t}},c=(e(170),e(0)),u=Object(c.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div")},[],!1,null,null,null);u.options.__file="MContent.vue";n.default=u.exports},247:function(t,n,e){"use strict";var i=e(172);e.n(i).a},251:function(t,n,e){"use strict";e.r(n);var i={components:{MContent:e(183).default},computed:{data:function(){return this.$page.frontmatter}}},s=(e(247),e(0)),r=Object(s.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"projects"},[e("div",{staticClass:"wrapper"},[e("Content"),t._v(" "),t._l(t.data.projects,function(n){return e("div",{staticClass:"project"},[n.image?e("div",{staticClass:"project-image"},[e("img",{attrs:{src:t.$withBase(n.image),alt:""}})]):t._e(),t._v(" "),e("div",{staticClass:"project-content"},t._l(n.rows,function(t){return e("div",[e("m-content",{attrs:{content:t.content}})],1)}))])})],2)])},[],!1,null,null,null);r.options.__file="Projects.vue";n.default=r.exports}}]);