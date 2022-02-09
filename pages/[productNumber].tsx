import ServiceInfo from "../src/components/service-info"
import ServiceProvider from "../src/providers/service-provider"

const Service = () => {
    return <ServiceProvider>
        <ServiceInfo />
    </ServiceProvider>
}

export default Service