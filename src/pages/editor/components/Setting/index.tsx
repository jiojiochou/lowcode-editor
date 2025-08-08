import { useComponetsStore } from "@/stores/components";

export function Setting() {
    const { components } = useComponetsStore();

    return (
        <div className="h-full of-auto">
            <pre>
                {JSON.stringify(components, null, 2)}
            </pre> 
        </div>
    )
}
