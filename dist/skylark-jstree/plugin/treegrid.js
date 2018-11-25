/**
 * skylark-jstree - A version of jstree that ported to running on skylarkjs ui.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-jstree/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/browser","skylark-utils-dom/eventer","skylark-utils-dom/noder","skylark-utils-dom/geom","skylark-utils-dom/query","./menu","../tree"],function(e,t,i,r,s,n,d,a){var o=/^\s*$/g,l=/[\\:&!^|()\[\]<>@*'+~#";,= \/${}%]/g,h=function(e){return(e||"").replace(l,"\\$&")},c="data-jstreegrid",g="data-jstreegrid-column",u="jstree-search",p="_DATA_",f=!1,m=10,v=function(e,t){return"jstree_"+e+"_grid_"+h(t)+"_col"},_=function(e){return n.makeArray(e.map(function(){return this.id}))},j=function(e,t,i,r){if(void 0==r&&(r=n()),null===t||void 0===t||0===t.length)return r;var s,d=n(),a=[].concat(i);return"string"==typeof t?(s=v(e,t),d=a.map(function(e){return"#"+s+e}).join(", ")):(d=[],t.forEach(function(t,i){var r=v(e,t);d=d.concat(a.map(function(e){return"#"+r+e}))}),d=d.join(", ")),1==a.length?r.find(d):n(d)},w=!1,x=null,C=0,y=0,b=/<\/?[^>]+>/gi,S=function(e,t,i,r,s){var d,a;if(r.data=n.extend(!0,{},t.data),t&&t.children_d&&s)for(d=0,a=t.children_d.length;d<a;d++)S(e,e.get_node(t.children_d[d]),i,i.get_node(r.children_d[d]),s)},k=function(e,t){var i,r=e.get_node(t),s=r.children;return i=!s||s.length<=0||!r.state.opened?t:k(e,s[s.length-1])},W=function(e,t,i){var r,s=e.hasClass("jstree-anchor")?e:e.children("[class~='jstree-anchor']"),n=i.settings.grid.columns[0];r="",n.title&&(n.title===p?r=i.get_text(t):t.attr(n.title)&&(r=t.attr(n.title))),r=r.replace(b,""),r&&s.attr("title",r)},M=function(e,t){var i;return i=void 0!==e&&null!==e?"function"==typeof e?e(t):null!==t.data&&void 0!==t.data&&void 0!==t.data[e]?t.data[e]:"":""};return n.jstree.defaults.grid={width:"auto"},n.jstree.plugins.grid=function(e,t){function r(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}this._initialize=function(){if(!this._initialized){var e,t,i=this.settings.grid||{},r=this.element,s=this._gridSettings={columns:i.columns||[],treeClass:"jstree-grid-col-0",context:i.contextmenu||!1,columnWidth:i.columnWidth,defaultConf:{"*display":"inline","*+display":"inline"},isThemeroller:!!this._data.themeroller,treeWidthDiff:0,resizable:i.resizable,draggable:i.draggable,stateful:i.stateful,indent:0,sortOrder:"text",sortAsc:!0,caseInsensitive:i.caseInsensitive,fixedHeader:i.fixedHeader!==!1,width:i.width,height:i.height,gridcontextmenu:i.gridcontextmenu,treecol:0,gridcols:[]},d=s.columns,a=0,o=!1;s.gridcontextmenu===!0?s.gridcontextmenu=function(e,t,i,r,s,n,d){return{edit:{label:"Edit",action:function(t){var r=n.get_node(i);e._edit(r,s,d)}}}}:s.gridcontextmenu===!1&&(s.gridcontextmenu=!1);for(var t=0,l=i.columns.length;t<l;t++)i.columns[t].tree?(a=t,s.treecol=a):s.gridcols.push(t);this.uniq=Math.ceil(1e3*Math.random()),this.rootid=r.attr("id");var h=/msie/.test(navigator.userAgent.toLowerCase());if(h){var c=parseFloat(navigator.appVersion.split("MSIE")[1]);c<8&&(s.defaultConf.display="inline",s.defaultConf.zoom="1")}f||(f=!0,e=[".jstree-grid-cell {vertical-align: top; overflow:hidden;margin-left:0;position:relative;width: 100%;padding-left:7px;white-space: nowrap;}",".jstree-grid-cell span {margin-right:0px;margin-right:0px;*display:inline;*+display:inline;white-space: nowrap;}",".jstree-grid-separator {position:absolute; top:0; right:0; height:24px; margin-left: -2px; border-width: 0 2px 0 0; *display:inline; *+display:inline; margin-right:0px;width:0px;}",".jstree-grid-header-cell {overflow: hidden; white-space: nowrap;padding: 1px 3px 2px 5px; cursor: default;}",".jstree-grid-header-themeroller {border: 0; padding: 1px 3px;}",".jstree-grid-header-regular {position:relative; background-color: #EBF3FD; z-index: 1;}",".jstree-grid-hidden {display: none;}",".jstree-grid-resizable-separator {cursor: col-resize; width: 2px;}",".jstree-grid-separator-regular {border-color: #d0d0d0; border-style: solid;}",".jstree-grid-cell-themeroller {border: none !important; background: transparent !important;}",".jstree-grid-wrapper {table-layout: fixed; width: 100%; overflow: auto; position: relative;}",".jstree-grid-midwrapper {display: table-row;}",".jstree-grid-width-auto {width:auto;display:block;}",".jstree-grid-column {display: table-cell; overflow: hidden;}",".jstree-grid-ellipsis {text-overflow: ellipsis;}",".jstree-grid-col-0 {width: 100%;}"],n('<style type="text/css">'+e.join("\n")+"</style>").appendTo("head")),this.gridWrapper=n("<div></div>").addClass("jstree-grid-wrapper").insertAfter(r),this.midWrapper=n("<div></div>").addClass("jstree-grid-midwrapper").appendTo(this.gridWrapper),i.width&&this.gridWrapper.width(i.width),i.height&&this.gridWrapper.height(i.height);for(var t=0,l=d.length;t<l;t++)n("<div></div>").addClass("jstree-default jstree-grid-column jstree-grid-column-"+t+" jstree-grid-column-root-"+this.rootid).appendTo(this.midWrapper);this.midWrapper.children("div:eq("+a+")").append(r),r.addClass("jstree-grid-cell"),s.fixedHeader&&this.gridWrapper.scroll(function(){n(this).find(".jstree-grid-header").css("top",n(this).scrollTop())});var g=n.proxy(this.settings.sort,this);if(this.settings.sort=function(e,t){var i,r=this.colrefs;if("text"===s.sortOrder){var n=this.get_text(e).toLowerCase().localeCompare(this.get_text(t).toLowerCase());i=s.caseInsensitive?1===n:1===g(e,t)}else{var d=this.get_node(e),a=this.get_node(t),o=r[s.sortOrder].value,l="function"==typeof o?o(d):d.data[o],h="function"==typeof o?o(a):a.data[o];"undefined"!=typeof h&&(i=s.caseInsensitive?l.toLowerCase()>h.toLowerCase():l>h)}return s.sortAsc||(i=!i),i?1:-1},s.draggable)if(n.ui&&n.ui.sortable){var u,p;n(this.midWrapper).sortable({axis:"x",handle:".jstree-grid-header",cancel:".jstree-grid-separator",start:function(e,t){u=t.item.index()},stop:function(e,t){p=t.item.index(),s.columns.splice(p,0,s.columns.splice(u,1)[0])}})}else console.warn("[jstree-grid] draggable option requires jQuery UI");this.searchColumn=function(e){var t={};if("object"==typeof e)for(var i in e)e.hasOwnProperty(i)&&i%1===0&&i<d.length&&i>=0&&(t[i]=e[i]);o=t,0!==Object.keys(t).length?this.search("someValue"):this.search(""),o=!1};for(var t=0,l=d.length;t<l;t++){var m=d[t];"function"!=typeof m.search_callback&&(m.search_callback=function(e,t,i,r){var s=new n.vakata.search(e,(!0),{caseSensitive:v.case_sensitive,fuzzy:v.fuzzy});return s.search(t).isMatch})}var v=this.settings.search,_=v.search_callback;_||(_=function(e,t){var i,r,s=new n.vakata.search(e,(!0),{caseSensitive:v.case_sensitive,fuzzy:v.fuzzy}),o=s.search(t.text).isMatch;if(!o)for(var i=0,l=d.length;i<l&&!(a!==i&&(r=d[i],o=s.search(M(r.value,t)).isMatch));i++);return o}),v.search_callback=function(e,t){var i=!1;if(o){for(var s in o)if(o.hasOwnProperty(s)){var n=o[s];if(""==n)continue;var l=d[s];if(i=a==s?l.search_callback(n,t.text,t,l):l.search_callback(n,M(l.value,t),t,l),!i)break}r.trigger("columnSearch_grid.jstree")}else i=_(e,t),r.trigger("omniSearch_grid.jstree");return i},this._initialized=!0}},this.init=function(e,i){t.init.call(this,e,i),this._initialize()},this.bind=function(){t.bind.call(this),this._initialize(),this.element.on("move_node.jstree create_node.jstree clean_node.jstree change_node.jstree",n.proxy(function(e,t){var i=this.get_node(t||"#",!0),s=r();this._detachColumns(s),this._prepare_grid(i),this._reattachColumns(s)},this)).on("delete_node.jstree",n.proxy(function(e,t){if(void 0!==t.node.id){var i=(this.gridWrapper,[t.node.id]);t.node&&t.node.children_d&&(i=i.concat(t.node.children_d)),j(this.uniq,i,this._gridSettings.gridcols).remove()}},this)).on("show_node.jstree",n.proxy(function(e,t){this._hideOrShowTree(t.node,!1)},this)).on("hide_node.jstree",n.proxy(function(e,t){this._hideOrShowTree(t.node,!0)},this)).on("close_node.jstree",n.proxy(function(e,t){this._hide_grid(t.node)},this)).on("open_node.jstree",n.proxy(function(e,t){},this)).on("load_node.jstree",n.proxy(function(e,t){},this)).on("loaded.jstree",n.proxy(function(e){this._prepare_headers(),this.element.trigger("loaded_grid.jstree")},this)).on("ready.jstree",n.proxy(function(e,t){var i,r=this.element.find("[class~='jstree-anchor']:first").outerHeight(),s=this.element.attr("class")||"";n('<style type="text/css">div.jstree-grid-cell-root-'+this.rootid+" {line-height: "+r+"px; height: "+r+"px;}</style>").appendTo("head"),i=s.split(/\s+/).map(function(e){var t=e.match(/^jstree(-|$)/);return t?"":e}),this.gridWrapper.addClass(i.join(" "))},this)).on("move_node.jstree",n.proxy(function(e,t){var i=t.new_instance.element;i.find("li > a").each(n.proxy(function(e,t){},this))},this)).on("hover_node.jstree",n.proxy(function(e,t,i){var r=t.node.id;null!==this._hover_node&&void 0!==this._hover_node&&j(this.uniq,this._hover_node,this._gridSettings.gridcols).removeClass("jstree-hovered"),this._hover_node=r,j(this.uniq,r,this._gridSettings.gridcols).addClass("jstree-hovered")},this)).on("dehover_node.jstree",n.proxy(function(e,t,i){var r=t.node.id;this._hover_node=null,j(this.uniq,r,this._gridSettings.gridcols).removeClass("jstree-hovered")},this)).on("select_node.jstree",n.proxy(function(e,t,i){var r=t.node.id;j(this.uniq,r,this._gridSettings.gridcols).addClass("jstree-clicked"),this.get_node(t.node.id,!0).children("div.jstree-grid-cell").addClass("jstree-clicked")},this)).on("deselect_node.jstree",n.proxy(function(e,t,i){var r=t.node.id;j(this.uniq,r,this._gridSettings.gridcols).removeClass("jstree-clicked")},this)).on("deselect_all.jstree",n.proxy(function(e,t,i){var r=t.node||[];j(this.uniq,r,this._gridSettings.gridcols).removeClass("jstree-clicked")},this)).on("search.jstree",n.proxy(function(e,t){var i,s,d=this.gridWrapper,a=this,o=(new Date).getTime(),l=_(t.nodes.filter(".jstree-node"));if(this.holdingCells={},t.nodes.length){var h=r(),c=d.find("div.jstree-grid-cell-regular");this._detachColumns(h),this._data.search.som&&(this._data.search.smc&&(i=t.nodes.add(t.nodes.find(".jstree-node"))),i=(i||t.nodes).add(t.nodes.parentsUntil(".jstree")),c.hide(),i.filter(".jstree-node").each(function(e,t){var i=t.id;if(i){a._prepare_grid(t);for(var e=0,r=a._gridSettings.gridcols.length;e<r;e++)e!==a._gridSettings.treecol&&j(a.uniq,i,a._gridSettings.gridcols[e],n(a._domManipulation.columns[e])).show()}}));for(var g=0,p=this._gridSettings.gridcols.length;g<p;g++)g!==this._gridSettings.treecol&&j(a.uniq,l,this._gridSettings.gridcols[g],n(this._domManipulation.columns[g])).addClass(u);this._reattachColumns(h),s=(new Date).getTime(),this.element.trigger("search-complete.jstree-grid",[{time:s-o}])}return!0},this)).on("clear_search.jstree",n.proxy(function(e,t){var i=this.gridWrapper,r=_(t.nodes.filter(".jstree-node"));return i.find("div.jstree-grid-cell").show(),j(this.uniq,r,this._gridSettings.gridcols).removeClass(u),!0},this)).on("copy_node.jstree",function(e,t){var i=t.new_instance,r=t.old_instance,s=i.get_node(t.node,!0);return S(r,t.original,i,t.node,!0),i._detachColumns(s.id),i._prepare_grid(s),i._reattachColumns(s.id),!0}).on("show_ellipsis.jstree",n.proxy(function(e,t){return this.gridWrapper.find(".jstree-grid-cell").add(".jstree-grid-header",this.gridWrapper).addClass("jstree-grid-ellipsis"),!0},this)).on("hide_ellipsis.jstree",n.proxy(function(e,t){return this.gridWrapper.find(".jstree-grid-cell").add(".jstree-grid-header",this.gridWrapper).removeClass("jstree-grid-ellipsis"),!0},this)),this._gridSettings.isThemeroller&&this.element.on("select_node.jstree",n.proxy(function(e,t){t.rslt.obj.children("[class~='jstree-anchor']").nextAll("div").addClass("ui-state-active")},this)).on("deselect_node.jstree deselect_all.jstree",n.proxy(function(e,t){t.rslt.obj.children("[class~='jstree-anchor']").nextAll("div").removeClass("ui-state-active")},this)).on("hover_node.jstree",n.proxy(function(e,t){t.rslt.obj.children("[class~='jstree-anchor']").nextAll("div").addClass("ui-state-hover")},this)).on("dehover_node.jstree",n.proxy(function(e,t){t.rslt.obj.children("[class~='jstree-anchor']").nextAll("div").removeClass("ui-state-hover")},this)),this._gridSettings.stateful&&this.element.on("resize_column.jstree-grid",n.proxy(function(e,t,i){localStorage["jstree-root-"+this.rootid+"-column-"+t]=i},this))},this.teardown=function(){var e=this.gridWrapper,i=this.element,r=e.parent();i.detach(),e.remove(),r.append(i),t.teardown.call(this)},this._clean_grid=function(e,t){var i=this.gridWrapper;e?j(this.uniq,t,this._gridSettings.gridcols).remove():i.find("div.jstree-grid-cell-regular").remove()},this._prepare_headers=function(){var e,t,i,r,s,d,a,o,l,h,c,u=this,p=this._gridSettings,f=p.columns||[],v=p.columnWidth,_=p.resizable||!1,j=p.isThemeroller,b=j?"themeroller":"regular",S=!1,k=this.gridparent,W=this.rootid,M=p.defaultConf,z=0,q=0;this.parent=k,this.colrefs={};for(var t=0,A=f.length;t<A;t++){s=f[t].headerClass||"",d=f[t].columnClass||"",a=f[t].header||"";do c=String(Math.floor(1e4*Math.random()));while(void 0!==this.colrefs[c]);o=f[t].value?c:"text",this.colrefs[o]=f[t],a&&(S=!0),r=p.stateful&&localStorage["jstree-root-"+W+"-column-"+t]?localStorage["jstree-root-"+W+"-column-"+t]:f[t].width||v;var T=f[t].minWidth||r,O=f[t].maxWidth||r;z=j?7:10,"auto"!==r&&"string"!=typeof r&&(r-=z),i=this.midWrapper.children("div.jstree-grid-column-"+t),l=n("<div></div>").css(M).addClass("jstree-grid-div-"+this.uniq+"-"+t+" "+(j?"ui-widget-header ":"")+" jstree-grid-header jstree-grid-header-cell jstree-grid-header-"+b+" "+s+" "+d).html(a),l.addClass((j?"ui-widget-header ":"")+"jstree-grid-header jstree-grid-header-"+b),this.settings.core.themes.ellipsis===!0&&l.addClass("jstree-grid-ellipsis"),l.prependTo(i),l.attr(g,o),q+=l.outerWidth(),h=n("<div class='jstree-grid-separator jstree-grid-separator-"+b+(j?" ui-widget-header":"")+(_?" jstree-grid-resizable-separator":"")+"'>&nbsp;</div>").appendTo(l),i.width(r),i.css("min-width",T),i.css("max-width",O)}l.addClass((j?"ui-widget-header ":"")+"jstree-grid-header jstree-grid-header-last jstree-grid-header-"+b),void 0===f[f.length-1].width&&(q-=r,i.css({width:"auto"}),l.addClass("jstree-grid-width-auto").next(".jstree-grid-separator").remove()),S?p.header=e:n("div.jstree-grid-header").hide(),!this.bound&&_&&(this.bound=!0,n(document).mouseup(function(){var e,t,i,r,s,d;w&&(d=x.prevAll(".jstree-grid-column").length,s=x.closest(".jstree-grid-wrapper").find(".jstree"),e=n.jstree.reference(s),t=e.settings.grid.columns,r=x.parent().children("div.jstree-grid-column"),(isNaN(d)||d<0)&&(e._gridSettings.treeWidthDiff=s.find("ins:eq(0)").width()+s.find("[class~='jstree-anchor']:eq(0)").width()-e._gridSettings.columns[0].width),i=e._gridSettings.columns[d].width=parseFloat(x.css("width")),w=!1,x=null,s.trigger("resize_column.jstree-grid",[d,i]))}).mousemove(function(e){if(w){y=e.pageX;var t,i,r,s=y-C;0!==s&&(t=x.width(),i=parseFloat(x.css("width")),i||(i=x.innerWidth()),s=s<0?Math.max(s,-t):s,r=i+s,(s>0||t>0)&&r>m&&(x.width(r+"px"),x.css("min-width",r+"px"),x.css("max-width",r+"px"),C=y))}}),this.gridWrapper.on("selectstart",".jstree-grid-resizable-separator",function(){return!1}).on("mousedown",".jstree-grid-resizable-separator",function(e){return w=!0,C=e.pageX,x=n(this).closest("div.jstree-grid-column"),!1}).on("dblclick",".jstree-grid-resizable-separator",function(e){var t,i,r=n(this),s=r.closest("div.jstree-grid-column"),d=parseFloat(s.css("width")),a=0,o=s.prevAll(".jstree-grid-column").length,l=s.width();s.find(".jstree-grid-cell").each(function(){var e,t=n(this);t.css("position","absolute"),t.css("width","auto"),e=t.outerWidth(),t.css("position","relative"),e>a&&(a=e)}),t=a-d,t=t<0?Math.max(t,-l):t,i=d+t+"px",s.width(i),s.css("min-width",i),s.css("max-width",i),n(this).closest(".jstree-grid-wrapper").find(".jstree").trigger("resize_column.jstree-grid",[o,i])}).on("click",".jstree-grid-separator",function(e){e.stopPropagation()})),this.gridWrapper.on("click",".jstree-grid-header-cell",function(e){if(u.sort){var t,i=n(this).attr(g);p.sortOrder===i&&p.sortAsc===!0?(p.sortAsc=!1,t="&darr;"):(p.sortOrder=i,p.sortAsc=!0,t="&uarr;"),n(this.closest(".jstree-grid-wrapper")).find(".jstree-grid-sort-icon").remove(),n("<span></span>").addClass("jstree-grid-sort-icon").appendTo(n(this)).html(t);var r=u.get_node("#");u.sort(r,!0),u.redraw_node(r,!0)}})},this._domManipulation=null,this._detachColumns=function(e){if(null==this._domManipulation){var t=this._gridSettings.columns||[],i=(this._gridSettings.treecol,this.midWrapper);this._domManipulation={id:e,columns:{}};for(var r=0,s=t.length;r<s;r++)this._domManipulation.columns[r]=i.children(".jstree-grid-column-"+r)[0],this._domManipulation.columns[r].parentNode.removeChild(this._domManipulation.columns[r])}return this._domManipulation},this._reattachColumns=function(e){if(null==this._domManipulation)return!1;if(this._domManipulation.id===e){for(var t=this._gridSettings.columns||[],i=(this._gridSettings.treecol,this.midWrapper),r=0,s=t.length;r<s;r++)i[0].appendChild(this._domManipulation.columns[r]);this._domManipulation=null}return!0},this.open_node=function(e,i,s){var d=n.isArray(e),a=null;if(d||(a=this.get_node(e),"#"!==a.id)){var o=d?r():a.id;this._detachColumns(o);var l=t.open_node.call(this,e,i,s);return this._reattachColumns(o),l}},this.redraw_node=function(e,i,s,d){var a=n.isArray(e)?r():this.get_node(e).id;return this._detachColumns(a),e=t.redraw_node.call(this,e,i,s,d),e&&this._prepare_grid(e),this._reattachColumns(a),e},this.refresh=function(){return this._clean_grid(),t.refresh.apply(this,arguments)},this.set_id=function(e,i){var r,s=this.uniq;e&&(r=e.id);var d=t.set_id.apply(this,arguments);if(d&&void 0!==r){var a=(this.gridWrapper,[r]);e&&e.children_d&&(a=a.concat(e.children_d)),j(s,a,this._gridSettings.gridcols).attr(c,e.id).removeClass(v(s,r)).addClass(v(s,e.id)).each(function(t,i){n(i).attr("id",v(s,e.id)+(t+1))})}return d},this._hideOrShowTree=function(e,t){this._detachColumns(e.id),this._hideOrShowNode(e,t,this._gridSettings.columns||[],this._gridSettings.treecol),this._reattachColumns(e.id)},this._hideOrShowNode=function(e,t,i,r){for(var s=0,d=i.length;s<d;s++)if(s!==r){var a=j(this.uniq,e.id,s,n(this._domManipulation.columns[s]));t?a.addClass("jstree-grid-hidden"):a.removeClass("jstree-grid-hidden")}if(e.state.opened&&e.children)for(var s=0,d=e.children.length;s<d;s++)this._hideOrShowNode(this.get_node(e.children[s]),t,i,r)},this._hide_grid=function(e){if(!e)return!0;this._detachColumns(e.id);for(var t=e.children?e.children:[],i=this._gridSettings.columns||[],r=this._gridSettings.treecol,s=0,d=t.length;s<d;s++){for(var a=this.get_node(t[s]),o=0,l=i.length;o<l;o++)o!==r&&j(this.uniq,a.id,o,n(this._domManipulation.columns[o])).remove();a.state.opened&&this._hide_grid(a)}this._reattachColumns(e.id)},this.holdingCells={},this.getHoldingCells=function(e,t,i){if(e.state.hidden||!e.state.opened)return n();var r,s,d=n(),a=e.children||[],o=this.uniq;for(s=0;s<a.length;s++)r=v(o,a[s])+t,i[r]&&(d=d.add(i[r]).add(this.getHoldingCells(this.get_node(a[s]),t,i)));return d},this._edit=function(e,t,i){if(!e)return!1;if(e.data||(e.data={}),!i)return!1;i=n(i),"div"===i.prop("tagName").toLowerCase()&&(i=i.children("span:first"));var s=this._data.core.rtl,d=this.element.width(),a=e.data[t.value],o=n("<div />",{css:{position:"absolute",top:"-200px",left:s?"0px":"-1000px",visibility:"hidden"}}).appendTo("body"),l=n("<input />",{value:a,"class":"jstree-rename-input",css:{padding:"0",border:"1px solid silver","box-sizing":"border-box",display:"inline-block",height:this._data.core.li_height+"px",lineHeight:this._data.core.li_height+"px",width:"150px"},blur:n.proxy(function(){var s=l.val();if(""===s||s===a)s=a;else{e.data[t.value]=s,this.element.trigger("update_cell.jstree-grid",{node:e,col:t.value,value:s,old:a});var n=r();this._detachColumns(n),this._prepare_grid(this.get_node(e,!0)),this._reattachColumns(n)}l.remove(),i.show()},this),keydown:function(e){var t=e.which;27===t&&(this.value=a),27!==t&&13!==t&&37!==t&&38!==t&&39!==t&&40!==t&&32!==t||e.stopImmediatePropagation(),27!==t&&13!==t||(e.preventDefault(),this.blur())},click:function(e){e.stopImmediatePropagation()},mousedown:function(e){e.stopImmediatePropagation()},keyup:function(e){l.width(Math.min(o.text("pW"+this.value).width(),d))},keypress:function(e){if(13===e.which)return!1}}),h={fontFamily:i.css("fontFamily")||"",fontSize:i.css("fontSize")||"",fontWeight:i.css("fontWeight")||"",fontStyle:i.css("fontStyle")||"",fontStretch:i.css("fontStretch")||"",fontVariant:i.css("fontVariant")||"",letterSpacing:i.css("letterSpacing")||"",wordSpacing:i.css("wordSpacing")||""};i.hide(),i.parent().append(l),l.css(h).width(Math.min(o.text("pW"+l[0].value).width(),d))[0].select()},this.grid_hide_column=function(e){this.midWrapper.find(".jstree-grid-column-"+e).hide()},this.grid_show_column=function(e){this.midWrapper.find(".jstree-grid-column-"+e).show()},this._prepare_grid=function(e){var t,r,s,a,l,h,g,p,f,m,_,w,x,C,y,S,z,q,A,T,O,P,N,L,D,I,V,F,H,B,E,U=this._gridSettings,$=U.treeClass,X=this,Q=U.columns||[],Y=U.isThemeroller,G=this.uniq,J=U.treecol,K=this.element,R=this.rootid,Z=Y?"themeroller":"regular",ee=this.get_node(e),te=U.columnWidth,ie=U.defaultConf,re=function(e,t,r,s,d){return function(d){var a=i.create("select_cell.jstree-grid");e.trigger(a,[{value:r,column:s.header,node:t,grid:n(this),sourceName:s.value}]),a.isDefaultPrevented()||t.children(".jstree-anchor").trigger("click.jstree",d)}},se=function(e,t,i,r,s){return function(n){U.gridcontextmenu&&(n.preventDefault(),d.popup(this,{x:n.pageX,y:n.pageY},U.gridcontextmenu(X,e,t,i,r,s,n.target)))}},ne=function(e,t){return function(){t.hover_node(e)}},de=function(e,t){return function(){t.dehover_node(e)}},ae=this.midWrapper,oe=ee.id,le=this.get_node(ee.parent).children,he=n.inArray(oe,le),ce=this.holdingCells,ge=!1;if(t=n(e),f=t.children("[class~='jstree-anchor']"),H=f.hasClass(u),B=f.hasClass("jstree-clicked"),1===f.length){E=!ee.state.opened,S=v(G,oe),z="#"===ee.parent?null:ee.parent,f.addClass($),W(f,t,X),m=f,T=he<=0?ee.parent:k(this,le[he-1]),P=he>=le.length-1?"NULL":le[he+1],L=ee.children&&ee.children.length>0?ee.children[0]:"NULL";for(var a=(this.settings.grid,0),ue=Q.length;a<ue;a++)if(J!==a){if(D=Q[a],F=null==this._domManipulation?ae.children("div:eq("+a+")"):n(this._domManipulation.columns[a]),h=D.cellClass||"",g=D.wideCellClass||"",p=D.columnClass||"",F.addClass(p),l=M(D.value,ee),"function"==typeof D.format&&(l=D.format(l)),D.images?(s=D.images[l]||D.images["default"],s&&(I="*"===s[0]?'<span class="'+s.substr(1)+'"></span>':'<img src="'+s+'">')):I=l,(void 0===I||null===I||o.test(I))&&(I="&nbsp;"),_=D.valueClass&&null!==ee.data&&void 0!==ee.data?ee.data[D.valueClass]||"":"",_&&D.valueClassPrefix&&""!==D.valueClassPrefix&&(_=D.valueClassPrefix+_),w=D.wideValueClass&&null!==ee.data&&void 0!==ee.data?ee.data[D.wideValueClass]||"":"",w&&D.wideValueClassPrefix&&""!==D.wideValueClassPrefix&&(w=D.wideValueClassPrefix+w),y=D.title&&null!==ee.data&&void 0!==ee.data?ee.data[D.title]||"":"",y=y.replace(b,""),C=7,r=D.width||te,"auto"!==r&&(r=V||r-C),m=j(G,oe,a,F),(!m||m.length<1)&&(m=n("<div></div>"),n("<span></span>").appendTo(m),m.attr("id",S+a),m.addClass(S),m.attr(c,oe),H?m.addClass(u):m.removeClass(u),B?m.addClass("jstree-clicked"):m.removeClass("jstree-clicked"),this.settings.core.themes.ellipsis===!0&&a!==J&&m.addClass("jstree-grid-ellipsis")),ee.state.hidden?m.addClass("jstree-grid-hidden"):m.removeClass("jstree-grid-hidden"),A=j(G,T,a,F),O=j(G,P,a,F),N=j(G,L,a,F),q=j(G,z,a,F),z?(q&&q.length>0?(A&&A.length>0?m.insertAfter(A):N&&N.length>0?m.insertBefore(N):O&&O.length>0?m.insertBefore(O):m.insertAfter(q),ge=!0):ge=!1,ce[S+a]=m):(A&&A.length>0?m.insertAfter(A):N&&N.length>0?m.insertBefore(N):O&&O.length>0?m.insertBefore(O):m.appendTo(F),ge=!0),ge){var pe=this.getHoldingCells(ee,a,ce);m.after(pe)}x=m.children("span"),x.addClass(h+" "+_).html(I),m=m.css(ie).addClass("jstree-grid-cell jstree-grid-cell-regular jstree-grid-cell-root-"+R+" jstree-grid-cell-"+Z+" "+g+" "+w+(Y?" ui-state-default":"")).addClass("jstree-grid-col-"+a).addClass("jstree-animated"),m.click(re(K,t,l,D,this)),m.on("contextmenu",se(K,t,l,D,this)),m.hover(ne(t,this),de(t,this)),y&&x.attr("title",y),K.trigger("render_cell.jstree-grid",[{value:l,column:D.header,node:t,sourceName:D.value}])}m.addClass("jstree-grid-cell-last"+(Y?" ui-state-default":"")),void 0===Q[Q.length-1].width&&m.addClass("jstree-grid-width-auto").next(".jstree-grid-separator").remove()}this.element.css({"overflow-y":"auto !important"})},this.holdingCells={}},n});
//# sourceMappingURL=../sourcemaps/plugin/treegrid.js.map