// Defined dearman entry object
// Gets information from form set

class Dearman_entry {
    constructor() {
        this.topic;
        this.describe_entry;
        this.express_entry;
        this.assert_entry;
        this.reinforce_entry;
        this.mindful_entry;
        this.appear_confident_entry;
        this.negotiate_entry;
    }

    get_topic() {
        const topicForm = document.querySelector(".topic-form");
        const topic = topicForm.querySelector("#topic").value;
        return topic;
    }

    get_describe_entry() {
        const describeForm = document.querySelector(".describe-form");
        const description = describeForm.querySelector("#description").value;
        return description;
    }

    get_express_entry() {
        const expressForm = document.querySelector(".express-form");
        const expression = expressForm.querySelector("#expression").value;
        return expression;
    }

    get_assert_entry() {
        const assertForm = document.querySelector(".assert-form");
        const assertion = assertForm.querySelector("#assertion").value;
        return assertion;
    }

    get_reinforcement_entry() {
        // Can be multiple or just one
        const reinforcmentForm = document.querySelector(".reinforcement-form");
        const reinforcements = reinforcmentForm.querySelectorAll(".reinforcement");
        reinforcements = reinforcements.map(x => x.value);
        return reinforcements;
    }

    get_mindful_entry() {
        const mindfulForm = document.querySelector(".mindful-form");
        const strategies = mindfulForm.querySelectorAll(".strategy");
        strategies = strategies.map(x=>x.value);
        return strategies;
    }

    get_appear_confident_entry() {
        const confidentForm = document.querySelector(".appear-confident-form");
        const formEntries = confidentForm.querySelectorAll("appear-confident");
        formEntries = formEntries.map(x=>x.value);
        return formEntries;
    }

    get_negotiate_entry() {
        const negotiateForm = document.querySelector(".negotiate-form");
        const negotiations = negotiateForm.querySelectorAll("negotiation");
        negotiations = negotiations.map(x=>x.value);
    }
}