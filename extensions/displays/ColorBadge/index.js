import { resolveComponent, openBlock, createBlock, withCtx, createTextVNode, toDisplayString } from 'vue';

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {
    props: {
        value: {
            type: String,
            default: null,
        },
    },
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_button = resolveComponent("v-button");

  return (openBlock(), createBlock(_component_v_button, { primary: "" }, {
    default: withCtx(() => [
      createTextVNode(toDisplayString($props.value), 1 /* TEXT */)
    ]),
    _: 1 /* STABLE */
  }))
}
var DisplayComponent = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"display.vue"]]);

var index = {
    id: "color-badge",
    name: "ColorBadge",
    icon: "box",
    description: "This is my custom Color Badge!",
    component: DisplayComponent,
    options: null,
    types: ["string"],
};

export { index as default };
