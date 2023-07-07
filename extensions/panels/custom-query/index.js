import { resolveComponent, openBlock, createBlock, normalizeClass } from "vue";

var script = {
    props: {
        showHeader: {
            type: Boolean,
            default: false,
        },
        query: {
            type: String,
            required: true,
        },
        fields: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            items: [],
            loading: false,
        };
    },
    computed: {
        tableHeaders() {
            return this.fields?.map((field) => {
                return {
                    text: field.label.toUpperCase(),
                    value: field.key,
                    align: "left",
                    sortable: false,
                    width: field.width,
                };
            });
        },
    },
    inject: ["api"],
    mounted() {
        this.getData();
    },
    watch: {
        query: {
            immediate: false,
            handler() {
                this.getData();
            },
        },
    },
    methods: {
        getData() {
            this.loading = true;
            if (!this.query) return;
            this.api
                .get(`custom-query?query=${encodeURIComponent(this.query)}`)
                .then((res) => {
                    if (res.data && res.data.length) {
                        this.items = res.data[0];
                    }
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    this.loading = false;
                });
        },
    },
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_v_table = resolveComponent("v-table");

    return (
        openBlock(),
        createBlock(
            _component_v_table,
            {
                class: normalizeClass({ "has-header": $props.showHeader }),
                items: $data.items,
                loading: $data.loading,
                headers: $options.tableHeaders,
                "onUpdate:headers":
                    _cache[0] ||
                    (_cache[0] = ($event) => ($options.tableHeaders = $event)),
            },
            null,
            8 /* PROPS */,
            ["class", "items", "loading", "headers"]
        )
    );
}

var e = [],
    t = [];
function n(n, r) {
    if (n && "undefined" != typeof document) {
        var a,
            s = !0 === r.prepend ? "prepend" : "append",
            d = !0 === r.singleTag,
            i =
                "string" == typeof r.container
                    ? document.querySelector(r.container)
                    : document.getElementsByTagName("head")[0];
        if (d) {
            var u = e.indexOf(i);
            -1 === u && ((u = e.push(i) - 1), (t[u] = {})),
                (a = t[u] && t[u][s] ? t[u][s] : (t[u][s] = c()));
        } else a = c();
        65279 === n.charCodeAt(0) && (n = n.substring(1)),
            a.styleSheet
                ? (a.styleSheet.cssText += n)
                : a.appendChild(document.createTextNode(n));
    }
    function c() {
        var e = document.createElement("style");
        if ((e.setAttribute("type", "text/css"), r.attributes))
            for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++)
                e.setAttribute(t[n], r.attributes[t[n]]);
        var a = "prepend" === s ? "afterbegin" : "beforeend";
        return i.insertAdjacentElement(a, e), e;
    }
}

var css =
    "\n.text.has-header {\n  padding: 0 12px;\n}\n.panel-container {\n  overflow-y: scroll;\n}\n";
n(css, {});

script.render = render;
script.__file = "src/panel.vue";

var index = {
    id: "custom-query",
    name: "Custom Query Panel",
    icon: "dynamic_form",
    description: "This is my custom Query panel!",
    component: script,
    options: [
        {
            field: "query",
            name: "Query",
            type: "string",
            meta: {
                interface: "input-code",
                options: { language: "sql" },
                width: "full",
            },
        },

        {
            field: "fields",
            name: "Fields",
            type: "standard",
            meta: {
                interface: "list",
                width: "full",
                options: {
                    fields: [
                        {
                            field: "key",
                            name: "Key",
                            type: "string",
                            meta: {
                                field: "key",
                                width: "half",
                                type: "string",
                                interface: "input",
                            },
                        },

                        {
                            field: "label",
                            name: "Label",
                            type: "string",
                            meta: {
                                field: "label",
                                width: "half",
                                type: "string",
                                interface: "input",
                            },
                        },
                        {
                            field: "width",
                            name: "Width",
                            type: "string",
                            meta: {
                                field: "width",
                                width: "half",
                                type: "string",
                                interface: "input",
                            },
                        },
                    ],
                },
            },
        },
    ],
    minWidth: 12,
    minHeight: 8,
};

export { index as default };
