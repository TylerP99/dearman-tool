// Add field buttons
const addReinforcementButton = document.querySelector("#add-reinforcement");
addReinforcementButton.addEventListener("click", () => {
    const inputs = document.querySelector("#reinforcement-inputs");
    const newInput = document.createElement("input");
    newInput.classList.add("reinforcement");
    newInput.type = "text";
    newInput.placeholder = "A positive outcome";
    inputs.appendChild(newInput);
});

const addMindfulStrategyButton = document.querySelector("#add-mindful-strategy");
addMindfulStrategyButton.addEventListener("click", () => {
    const inputs = document.querySelector("#mindful-inputs");
    const newInput = document.createElement("input");
    newInput.classList.add("strategy");
    newInput.type = "text";
    newInput.placeholder = "Mindfulness Strategy";
    inputs.appendChild(newInput);
});

const addConfidenceButton = document.querySelector("#add-confident");
addConfidenceButton.addEventListener("click", () => {
    const inputs = document.querySelector("#confident-inputs");
    const newInput = document.createElement("input");
    newInput.classList.add("appear-confident");
    newInput.type = "text";
    inputs.appendChild(newInput);
});

const addNegotiationButton = document.querySelector("#add-negotiation");
addNegotiationButton.addEventListener("click", () => {
    const inputs = document.querySelector("#negotiation-inputs");
    const newInput = document.createElement("input");
    newInput.classList.add("negotiation");
    newInput.type = "text";
    inputs.appendChild(newInput);
});





const form = document.querySelector("form");
form.addEventListener("submit", create_dearman_guide);

function create_dearman_guide(e) {
    e.preventDefault();
    const targetSection = document.querySelector("#guide");
    const dearmanMaker = new Dearman_entry;
    dearmanMaker.append_document(targetSection);
}





// Defined dearman entry object
// Gets information from form set

class Dearman_entry {

    get_topic() {
        const topic = document.querySelector("#topic").value;
        return topic;
    }

    get_describe_entry() {
        const description = document.querySelector("#description").value;
        return description;
    }

    get_express_entry() {
        const expression = document.querySelector("#expression").value;
        return expression;
    }

    get_assert_entry() {
        const assertion = document.querySelector("#assertion").value;
        return assertion;
    }

    get_reinforcement_entry() {
        // Can be multiple or just one
        let reinforcements = document.querySelectorAll(".reinforcement");
        reinforcements = Array.from(reinforcements).map(x => x.value);
        return reinforcements;
    }

    get_mindful_entry() {
        let strategies = document.querySelectorAll(".strategy");
        strategies = Array.from(strategies).map(x=>x.value);
        return strategies;
    }

    get_appear_confident_entry() {
        let formEntries = document.querySelectorAll(".appear-confident");
        formEntries = Array.from(formEntries).map(x=>x.value);
        return formEntries;
    }

    get_negotiate_entry() {
        let negotiations = document.querySelectorAll(".negotiation");
        negotiations = Array.from(negotiations).map(x=>x.value);
        return negotiations;
    }

    generate_page() {
        const container = document.createElement("article");

        const heading = document.createElement("h2");
        heading.innerText = "DEAR MAN Reference";
        container.appendChild(heading);

        const describeSection = document.createElement("section");
        const describeHeader = document.createElement("h4");
        describeHeader.innerText = "Describe";
        const description = document.createElement("p");
        description.innerText = this.get_describe_entry();
        describeSection.appendChild(describeHeader);
        describeSection.appendChild(description);
        container.appendChild(describeSection);

        const expressSection = document.createElement("section");
        const expressHeader = document.createElement("h4");
        expressHeader.innerText = "Express";
        const expression = document.createElement("p");
        expression.innerText = this.get_express_entry();
        expressSection.appendChild(expressHeader);
        expressSection.appendChild(expression);
        container.appendChild(expressSection);

        const assertSection = document.createElement("section");
        const assertHeader = document.createElement("h4");
        assertHeader.innerText = "Assert";
        const assertion = document.createElement("p");
        assertion.innerText = this.get_assert_entry();
        assertSection.appendChild(assertHeader);
        assertSection.appendChild(assertion);
        container.appendChild(assertSection);

        const reinforceSection = document.createElement("section");
        const reinforceHeader = document.createElement("h4");
        reinforceHeader.innerText = "Reinforce";
        const reinforcementList = document.createElement("ul");
        const reinforcements = this.get_reinforcement_entry();
        reinforcements.forEach(x=>{
            const listItem = document.createElement("li");
            listItem.innerText = x;
            reinforcementList.appendChild(listItem);
        });
        reinforceSection.appendChild(reinforceHeader);
        reinforceSection.appendChild(reinforcementList);
        container.appendChild(reinforceSection);

        const mindfulSection = document.createElement("section");
        const mindfulHeader = document.createElement("h4");
        mindfulHeader.innerText = "Stay Mindful";
        const mindfulList = document.createElement("ul");
        const strategies = this.get_mindful_entry();
        strategies.forEach(x => {
            const li = document.createElement("li");
            li.innerText = x;
            mindfulList.appendChild(li);
        });
        mindfulSection.appendChild(mindfulHeader);
        mindfulSection.appendChild(mindfulList);
        container.appendChild(mindfulSection);

        const appearConfidentSection = document.createElement("section");
        const appearConfidentHeader = document.createElement("h4");
        appearConfidentHeader.innerText = "Appear Confident";
        const appearConfidentList = document.createElement("ul");
        const confidentReminders = this.get_appear_confident_entry();
        confidentReminders.forEach( x => {
            const li = document.createElement("li");
            li.innerText = x;
            appearConfidentList.appendChild(li);
        });
        appearConfidentSection.appendChild(appearConfidentHeader);
        appearConfidentSection.appendChild(appearConfidentList);
        container.appendChild(appearConfidentSection);

        const negotiateSection = document.createElement("section");
        const negotiateHeader = document.createElement("h4");
        negotiateHeader.innerText = "Negotiate";
        const negotiationList = document.createElement("ul");
        const negotiations = this.get_negotiate_entry();
        negotiations.forEach( x => {
            const li = document.createElement("li");
            li.innerText = x;
            negotiationList.appendChild(li);
        });
        negotiateSection.appendChild(negotiateHeader);
        negotiateSection.appendChild(negotiationList);
        container.appendChild(negotiateSection);

        return container;
    }

    append_document(target) {
        const form = this.generate_page();
        target.appendChild(form);
    }
}