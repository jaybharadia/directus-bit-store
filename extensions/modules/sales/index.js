import { resolveComponent, openBlock, createBlock, withCtx, createVNode, createElementBlock, Fragment, renderList, createTextVNode, toDisplayString } from 'vue';

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {
    inject: ["api"],
    data() {
        return {
            collections: null,
        };
    },
    mounted() {
        // log the system field so you can see what attributes are available under it
        // remove this line when you're done.
        console.log(this.api);

        // Get a list of all available collections to use with this module
        this.api.get("/collections?limit=-1").then((res) => {
            this.collections = res.data.data;
        });
    },
    methods: {
        logToConsole: function () {
            console.log(this.collections);
        },
    },
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_list_item = resolveComponent("v-list-item");
  const _component_v_list = resolveComponent("v-list");
  const _component_v_button = resolveComponent("v-button");
  const _component_private_view = resolveComponent("private-view");

  return (openBlock(), createBlock(_component_private_view, { title: "Example Collection List" }, {
    default: withCtx(() => [
      createVNode(_component_v_list, null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.collections, (col) => {
            return (openBlock(), createBlock(_component_v_list_item, {
              key: col.collection
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(col.collection), 1 /* TEXT */)
              ]),
              _: 2 /* DYNAMIC */
            }, 1024 /* DYNAMIC_SLOTS */))
          }), 128 /* KEYED_FRAGMENT */))
        ]),
        _: 1 /* STABLE */
      }),
      createVNode(_component_v_button, { onClick: $options.logToConsole }, {
        default: withCtx(() => [
          createTextVNode("Log collections to console")
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick"])
    ]),
    _: 1 /* STABLE */
  }))
}
var ModuleComponent = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"module.vue"]]);

var index = {
	id: 'custom',
	name: 'Custom',
	icon: 'box',
	routes: [
		{
			path: '',
			component: ModuleComponent,
		},
	],
};

export { index as default };
