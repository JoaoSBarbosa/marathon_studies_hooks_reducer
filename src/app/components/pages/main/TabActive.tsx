'use client'
import {useState} from "react";
import {TabTypes} from "@/app/components/types/tabTypes";
import {ButtonTabList} from "@/app/components/types/buttonTabList";
import {Aperture, ApplePodcastsLogo} from "@phosphor-icons/react";
import {ButtonTab} from "@/app/components/components/ButtonTab";
import {ItemsData} from "@/app/components/lessons/reducers_lesson/course_class/page";
import {ContextLesson} from "@/app/components/lessons/context_lesson/page";

export const TabActive = () => {

    const [tabActive, setTabActive] = useState<TabTypes>("reducers");

    const tabMenuList: ButtonTabList[] = [
        {
            id: 1,
            label: "Reducers",
            value: "reducers",
            icon: <Aperture/>
        },
        {
            id: 2,
            value: "context",
            label: "Context",
            icon: <ApplePodcastsLogo/>
        }
    ]
    return (
        <section className={"flex w-screen h-screen"}>
            <div className="flex flex-col gap-2 h-full w-[250px] border-r border-gray-300 p-2">
                <ul className={"flex flex-col gap-2 p-2"}>

                    {tabMenuList?.map((button) => (
                        <li key={button?.id}>
                            <ButtonTab
                                icon={button?.icon}
                                value={button?.label}
                                onClick={() => setTabActive(button.value)}
                            />
                        </li>
                    ))}

                </ul>
            </div>

            <div className="flex-1 overflow-auto p-4 bg-gray-200">
                {tabActive === 'context' &&
                    <ContextLesson/>
                }
                {tabActive === 'reducers' &&
                    <ItemsData/>
                }
            </div>
        </section>
    )
}