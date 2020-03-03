import Vue from "vue";
import Router from "vue-router";
import FAQs from "@/components/FAQs";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "",
            name: "FAQs",
            component: FAQs,
            meta: {
                title: "How to add Rich JSON-LD to Vue",
                metaTags: [
                    {
                        name: "description",
                        content: "How to add rich text (JSON-LD) to a single page Vue.js application."
                    }
                ]
            }
        }
    ]
});
