import AdvancedServices from "../components/AdvancedServices"
import BasicServices from "../components/BasicServices"
import ContactInfo from "../components/ContactInfo"
import GeneralServices from "../components/GeneralServices"
import SubLanding from "../components/SubLanding"

function Services() {
    return (
        <div>
            <SubLanding />
            <ContactInfo />
            <GeneralServices />
            <BasicServices />
            <AdvancedServices />
        </div>
    )
}

export default Services