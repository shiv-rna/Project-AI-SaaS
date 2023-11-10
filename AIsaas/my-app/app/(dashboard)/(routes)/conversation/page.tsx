"use client";

import * as z from "zod";
import { Heading } from "@/components/headings";
import { useForm } from "react-hook-form";
import { MessageSquare } from "lucide-react";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
// zod resolver for form validation
// @ is pointing towards our package name
// @/ is used for pointing towards a root directory

const ConversationPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });

    const isLoading = form.formState.isLoading;
    //extracting loading state

    const onSubmit = async( values: z.infer<typeof formSchema>) =>{
        console.log(values);
    }
    //on submit form async arrow func
    // We will send this to our API

    return(
        <div>
            <Heading
            title="Conversation"
            description="Our most advanced conversation model."
            icon={MessageSquare}
            iconColor="text-violet-500"
            bgColor="bg-violet-500/10"
            />
            <div className="px-4 lg:px-8">
                <div>

                </div>
            </div>
        </div>

     );
}

export default ConversationPage;